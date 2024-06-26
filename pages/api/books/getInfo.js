import connectDB from "@/utils/connectDB";
import Book from "../../../models/bookSchema";

const published = async (req, res) => {
  try {
    const { bookID } = req.query;
    console.log(bookID,"i am ID");
    const book = await Book.findOne({ _id: bookID });
    if (!book) {
      return res.status(400).json({ error: "Book Not found" });
    }
  
    res.status(200).json(book);
  } catch (e) {
    console.log(e);
    return res.status(400).json({ error: "Some error occured" });
  }
};

export default connectDB(published);
