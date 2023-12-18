import connectDB from "@/utils/connectDB";
import Book from "../../../../models/bookSchema";
import Author from "../../../../models/authorSchema";

const myBooks = (req, res) => {
  try {
    const { authorID } = req.query;
    const author = Author.find({ _id: authorID });
    if (!author) {
      return res.status(400).json({ error: "Not authorized" });
    }

    const books = Book.find({ author_id: authorID });
    res.status(200).json({ books: books });
  } catch (e) {
    console.log(e);
    return res.status(400).json({ error: "Some error occured" });
  }
};

export default connectDB(myBooks);
