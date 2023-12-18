import connectDB from "@/utils/connectDB";
import Book from "../../../../models/bookSchema";
import Author from "../../../../models/authorSchema";

const addBook = async (req, res) => {
  try {
    const { name, category, authorID } = req.body;
    const author = await Author.find({ _id: authorID });
    if (!author) {
      return res.status(400).json({ error: "Not authorized" });
    }

    const newBooks = Book.create({
      name: name,
      category: category,
      status: 1,
      author_id: authorID,
    });
  
    res.status(200).json({ books: newBooks });
  } catch (e) {
    console.log(e);
    return res.status(400).json({ error: "Some error occured" });
  }
};

export default connectDB(addBook);
