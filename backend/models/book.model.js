import mongoose  from "mongoose";

const bookSchema=new mongoose.Schema({
    bookTitle:{
        type:String,
        require:true
    },
    authorName:{
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
    imageURL:{
        type:String,
        require:true
    },
    category:{
        type:String,
        require:true
    }
},{timestamps:true})
export default mongoose.model('Book',bookSchema)