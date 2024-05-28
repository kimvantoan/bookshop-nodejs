import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoute from "./routers/auth.route.js";
import userRoute from "./routers/user.route.js";
import bookRoute from "./routers/book.route.js";
import commentRoute from "./routers/comment.route.js";
import cartRoute from "./routers/cart.route.js";
dotenv.config();
const app = express();
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["POST,GET,PUT,DELETE"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/auth", authRoute);
app.use("/user", userRoute);
app.use("/book", bookRoute);
app.use("/comment", commentRoute);
app.use('/cart',cartRoute)
connectDB();

app.listen(2003, () => {
  
  console.log("app is running port 2003");
});
