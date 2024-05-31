import Book from "../models/book.model.js";
import fs from 'fs'

export const createBook = async (req, res) => {
  try {
    const {
      bookTitle,
      authorName,
      description,
      originalPrice,
      publisher,
      publishDate,
      pageCount,
      form,
    } = req.body;
    const imageURL=req.file.filename
    if (!bookTitle) {
      return res.send({ message: "fill out name book", success: false });
    }
    if (!originalPrice) {
      return res.send({ message: "fill out price", success: false });
    }
    if (!imageURL) {
      return res.send({ message: "fill out image", success: false });
    }
    if (!publisher) {
      return res.send({ message: "fill out publisher", success: false });
    }
    await Book.create({
      bookTitle: bookTitle,
      authorName: authorName,
      description: description,
      originalPrice:originalPrice,
      imageURL: imageURL,
      publisher:publisher,
      publishDate:publishDate,
      pageCount: pageCount,
      form: form,
    });
    res.send({ message: "đã thêm một sách mới", success: true });
  } catch (error) {
    console.log(error);
    return res.send({ message: "something is wrong", success: false });
  }
};
export const getAllBook = async (req, res) => {
  try {
    const allBook = await Book.find();
    res.send(allBook);
  } catch (error) {
    console.log(error);
    return res.send({ message: "something is wrong" });
  }
};
export const getSingleBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    res.send(book);
  } catch (error) {
    console.log(error);
    return res.send({ message: "something is wrong", success: false });
  }
};
export const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      bookTitle,
      authorName,
      description,
      originalPrice,
      currentPrice,
      publisher,
      publishDate,
      pageCount,
      form,
    } = req.body;
    const book= await Book.findById(id)
    let imageURL=''
    if(req.file){
      imageURL=req.file.filename
    }else{
      imageURL=book.imageURL
    }
    if (!bookTitle) {
      return res.send({ message: "fill out name book", success: false });
    }
    if (!originalPrice) {
      return res.send({ message: "fill out originalPrice", success: false });
    }
    if (!imageURL) {
      return res.send({ message: "fill out imageURL", success: false });
    }
    if (!publisher) {
      return res.send({ message: "fill out publisher", success: false });
    }
    if (!publishDate) {
      return res.send({ message: "fill out publishDate", success: false });
    }
    await Book.findByIdAndUpdate(id, {
      bookTitle,
      authorName,
      description,
      originalPrice,
      currentPrice,
      imageURL,
      publisher,
      publishDate,
      pageCount,
      form,
    });
    res.send({ message: "cập nhật sách thành công", success: true });
  } catch (error) {
    console.log(error);
    return res.send({ message: "something is wrong", success: false });
  }
};
export const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book= await Book.findById(id)
    const filepath=`./public/images/${book.imageURL}`
    fs.unlinkSync(filepath)
    await Book.findByIdAndDelete(id);
    res.send({ message: "xóa sách thành công", success: true });
  } catch (error) {
    console.log(error);
    return res.send({ message: "something is wrong", success: false });
  }
};
