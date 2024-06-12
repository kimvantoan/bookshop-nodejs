import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  id_user: {
    type: String,
    required: true,
    index: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  products: {
    type: [
      {
        id_book: {
          type: String,
        },
        bookTitle: { type: String },
        currentPrice: { type: Number },
        originalPrice: { type: Number },
        imageURL: { type: String },
        count: { type: Number },
        _id: { type: String },
      },
    ],
    required: true,
    minlength: 1,
  },
  total: Number,
  address: String,
  phone: String,
  name: String,
  status: {
    type: String,
    default: "Pending",
  },
});
export default mongoose.model("order", orderSchema);
