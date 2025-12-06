import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
console.log(`${process.env.MONGODB_URI}/${DB_NAME}`)
const dbConnectionString = "mongodb+srv://pulkitshukla001_db_user:OuSZDPaOafYZVpCV@cluster0.yqmwg9s.mongodb.net/firstBackend"
const connectDB = async () => {
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MONGODB connected !! DB Host : ${connectionInstance.connection.host}`)
    }catch(error){
        console.log("MONGODB Connection error", error);
        process.exit(1)
    }
}

export default connectDB;