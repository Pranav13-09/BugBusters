import connectDB from "@/utils/connectDB";
import Book from "../../../../models/bookSchema";
import Author from "../../../../models/authorSchema";

const myBooks = async (req, res) => {
  try {
    const { authorID } = req.query;
    console.log(authorID,"i am here")
    const author = await Author.findOne({ _id: authorID });
    console.log(author,"i am author")
    if (!author) {
      return res.status(400).json({ error: "Not authorized" });
    }

    const books =await Book.find({ author_id: authorID });
    res.status(200).json({ books: books });
  } catch (e) {
    console.log(e);
    return res.status(400).json({ error: "Some error occured" });
  }
};

export default connectDB(myBooks);
