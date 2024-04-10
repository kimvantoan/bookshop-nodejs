import Book from "../models/book.model.js";

export const createBook = async (req, res) => {
  try {
    const { bookTitle, authorName, description, price, imageURL, category } =
      req.body;
    if (!bookTitle) {
      return res.send({ message: "fill out bookTitle", success: false });
    }
    if (!authorName) {
      return res.send({ message: "fill out authorName", success: false });
    }
    if (!description) {
      return res.send({ message: "fill out description", success: false });
    }
    if (!price) {
      return res.send({ message: "fill out price", success: false });
    }
    if (!imageURL) {
      return res.send({ message: "fill out imageURL", success: false });
    }
    if (!category) {
      return res.send({ message: "fill out category", success: false });
    }
    const book = await Book.create({
      bookTitle: bookTitle,
      authorName: authorName,
      description: description,
      price: price,
      imageURL: imageURL,
      category: category,
    });
    res.send({ message: "da them mot sach moi", success: true });
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
    const { bookTitle, authorName, description, price, imageURL, category } =
      req.body;
    await Book.findByIdAndUpdate(id, {
      bookTitle: bookTitle,
      authorName: authorName,
      description: description,
      price: price,
      imageURL: imageURL,
      category: category,
    });
    res.send({ message: "update sach thanh cong", success: true });
  } catch (error) {
    console.log(error);
    return res.send({ message: "something is wrong", success: false });
  }
};
export const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    await Book.findByIdAndDelete(id);
    res.send({ message: "xoa thanh cong", success: true });
  } catch (error) {
    console.log(error);
    return res.send({ message: "something is wrong", success: false });
  }
};
