import connectDB from "@/utils/connectDB";
import Book from "../../../../models/bookSchema";
import Author from "../../../../models/authorSchema";

const addBook = async (req, res) => {
  try {
    const { authors,category,image,authorID } = req.body;
    const author = await Author.find({ _id: authorID });
    if (!author) {
      return res.status(400).json({ error: "Not authorized" });
    }

    res.status(200).json({ books: newBooks });
  } catch (e) {
    console.log(e);
    return res.status(400).json({ error: "Some error occured" });
  }
};

export default connectDB(addBook);
