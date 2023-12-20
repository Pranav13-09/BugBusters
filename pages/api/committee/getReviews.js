import connectDB from "@/utils/connectDB";
import Book from "../../../models/bookSchema";
import Author from "../../../models/authorSchema";

const addBook = async (req, res) => {
  try {
    const { bookID } = req.query;
      const Book = await Book.findOne({ _id: bookID })
    if (!Book) {
      return res.status(400).json({ error: "Book Not Found" });
      }
      
      const reviews = Book.expertScores;
      return res.status(200).json({books:Book})

  } catch (e) {
    console.log(e);
    return res.status(400).json({ error: "Some error occured" });
  }
};

export default connectDB(addBook);
