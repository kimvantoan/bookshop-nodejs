import Book from "../models/book.model.js";

export const createBook = async (req, res) => {
  try {
    const {
      bookTitle,
      authorName,
      description,
      price: { originalPrice, currentPrice },
      imageURL,
      publish: { publisher, publishDate },
      pageCount,
      form,
    } = req.body;
    if (!bookTitle) {
      return res.send({ message: "fill out bookTitle", success: false });
    }
    if (!originalPrice) {
      return res.send({ message: "fill out originalPrice", success: false });
    }
    if (!imageURL) {
      return res.send({ message: "fill out imageURL", success: false });
    }
    await Book.create({
      bookTitle: bookTitle,
      authorName: authorName,
      description: description,
      price: { originalPrice, currentPrice },
      imageURL: imageURL,
      publish: { publisher, publishDate },
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
      // price: { originalPrice, currentPrice },
      imageURL,
      publish: { publisher, publishDate },
      pageCount,
      form,
    } = req.body;
    await Book.findByIdAndUpdate(id, {
      bookTitle: bookTitle,
      authorName: authorName,
      description: description,
      // price: { originalPrice, currentPrice },
      imageURL: imageURL,
      publish: { publisher, publishDate },
      pageCount: pageCount,
      form: form
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
    await Book.findByIdAndDelete(id);
    res.send({ message: "xóa sách thành công", success: true });
  } catch (error) {
    console.log(error);
    return res.send({ message: "something is wrong", success: false });
  }
};
