import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoute from "./routers/auth.route.js";
import userRoute from "./routers/user.route.js";
import bookRoute from "./routers/book.route.js";
dotenv.config();
const app = express();
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["POST,GET,PUT"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/auth", authRoute);
app.use("/user", userRoute);
app.use("/book", bookRoute);

connectDB();

app.listen(2003, () => {
  
  console.log("app is running port 2003");
});
