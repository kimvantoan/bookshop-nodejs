import mongoose from 'mongoose'

const connectDB=async()=>{
    try {
        await mongoose.connect(process.env.URL_MONGODB)
        console.log("connect to mongodb successfull");
    } catch (error) {
        console.log(error);
    }
}
export default connectDB