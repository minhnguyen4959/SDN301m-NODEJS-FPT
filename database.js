import mongoose from "mongoose";
const connectDB = () => {
     try {
        const db = mongoose.connect(process.env.URI_MONGODB);
        console.log("connect to MongoDB successfully !");
     } catch (error) {
        throw new Error(error.toString())
     }
}

export default connectDB;
