import express from 'express'
import { rateLimiterMiddleware } from '../middleware/rateLimiter'
import { createUrl, deleteUrl, getAllUrl, getUrl } from '../controller/shortUrl'

const router = express.Router()

router.post("/shortUrl",rateLimiterMiddleware, createUrl)
router.get("/shortUrl", getAllUrl)
router.get("/shortUrl/:id", getUrl)
router.delete("/shortUrl/:id", deleteUrl)

export default router;