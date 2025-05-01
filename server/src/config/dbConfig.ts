import mongoose from 'mongoose'
import dotenv from 'dotenv'
import { error } from 'console'

dotenv.config()
const connectDb = async () =>{
    const dbUri = process.env.DB_URI
    if(!dbUri){
        console.error("DB URI is missing in env file")
        process.exit(1)
    }
    try {
        
        const connect = await mongoose.connect(dbUri)
        console.log(
            "db connected: ", 
            connect.connection.host, 
            connect.connection.name);
        
    } catch (error) {
        console.log(error);
        process.exit(1)
        
    }
}

export default connectDb