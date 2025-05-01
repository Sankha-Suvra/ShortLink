import { RateLimiterRedis } from "rate-limiter-flexible";
import Redis from 'ioredis'
import {Request, Response,NextFunction} from 'express'

//connecting to redis
const redisUrl = process.env.REDIS_URL 
if (!redisUrl) {
  console.error("FATAL ERROR: REDIS_URL environment variable is not set.");
  process.exit(1); 
}
console.log("Attempting to connect to Redis using URL from environment variable...");

const redisClient = new Redis(redisUrl,{
    enableOfflineQueue: false
})

redisClient.on('connect', () => {
  console.log('Successfully connected to Redis');
});

redisClient.on('error', (err) => {
  console.error('Redis connection error:', err);
});

//rate Limiter
const rateLimiter = new RateLimiterRedis({
    storeClient: redisClient,
    keyPrefix: 'middleware',
    points: 5,
    duration: 60, //per 60 sec
    blockDuration: 60,
    
})

export const rateLimiterMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const ip = (req.headers['x-forwarded-for'] as string)?.split(',')[0].trim() || req.socket.remoteAddress || req.ip || 'unknown';

    rateLimiter.consume(String(ip))
      .then(() => {
        next();
      })
      .catch((rateLimiterRes) => {
        console.warn(`Rate limit exceeded for IP: ${ip}`);
        res.status(429).json({
          message: 'Too many requests. Please try again later.',
        });
      });
  };