import mongoose  from "mongoose";

const connectDb = async ()=>{
    try {
        
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("db connected successfully!")
        console.log("Hello")
    } catch (error) {
        console.log("db connection failed")

        
    }
}

export default connectDb;