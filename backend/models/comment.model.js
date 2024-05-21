import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  id_user: {
    type: String,
    default: "no_user",
  },
  id_book: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
  },
  date: {
    type: Date,
    default: new Date()
  },
});

export default mongoose.model("Comment", commentSchema);
