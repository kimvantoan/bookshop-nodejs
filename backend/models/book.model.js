import mongoose  from "mongoose";

const bookSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    title:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    price:{
        type:String,
        require:true
    },
    image:{
        type:String,
        require:true
    },
},{timestamps:true})
export default mongoose.model('Book',bookSchema)