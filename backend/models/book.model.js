import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    bookTitle: {
      type: String,
      require: true,
    },
    authorName: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    price: {
      originalPrice: {
        type: Number,
        require: true,
      },
      currentPrice:{
        type:Number,
        require:true
      }
    },
    imageURL: {
      type: String,
      require: true,
    },
    publish: {
      publisher: {
        type: String,
        require: true,
      },
      publishDate: {
        type: Date,
        require: true,
      },
    },
    pageCount:{
      type:Number,
      default:0
    },
    form:{
      type:String,
      default:""
    }
  },
  { timestamps: true }
);
export default mongoose.model("Book", bookSchema);
