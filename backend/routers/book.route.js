import express from "express";
import {
  getAllBook,
  getSingleBook,
  updateBook,
  deleteBook,
  createBook,
} from "../controllers/book.controller.js";
import multer from "multer";
import { verify, isAdmin } from "../middleware/veryfi.js";

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/images");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null,uniqueSuffix+file.originalname);
  },
});

var upload = multer({ storage:storage })

router.get("/allBook", getAllBook);
router.get("/:id", getSingleBook);
router.put("/updateBook/:id",upload.single('imageURL'), updateBook);
router.delete("/deleteBook/:id", deleteBook);
router.post("/createBook", upload.single('imageURL'), createBook);

export default router;
