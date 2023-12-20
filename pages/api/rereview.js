import connectDB from "../../utils/connectDB";
import { exec } from "child_process";
import Book from "../../models/bookSchema";

const rereview = async (req, res) => {
  const books = await Book.find();
  books.map((book) => {
    if (Math.abs(book.finalEvaluationScore / 15 - book.userRating) >= 3) {
      book.status(1);
      book.save();
    }
  });
};

export default connectDB(rereview);
