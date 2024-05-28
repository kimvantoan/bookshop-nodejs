import mongoose from "mongoose";

const cartSchema = new mongoose.Schema(
  {
    id_user: {
      type: String,
      require: true,
    },
    date: {
      type: Date,
      default: new Date(),
    },
    products: {
      type: [
        {
          id_book: {
            type: String,
          },
          bookTitle: { type: String },
          originalPrice: { type: Number },
          currentPrice: { type: Number },
          imageURL: { type: String },
          count: { type: Number },
          _id:{type:String}
        },
      ],
      required: true,
      minlength: 1,
    },
  },
  { timestamps: true }
);
export default mongoose.model("Cart", cartSchema);
