import connectDB from "@/utils/connectDB";
import Book from "../../../../models/bookSchema";
import Author from "../../../../models/authorSchema";

const addBook = async (req, res) => {
  try {
    const { email } = req.body;
    const author = await Author.find({ email: email });
    if (!author) {
      return res.status(400).json({ error: "Author Not Found" });
    }
    res.status(200).json({ author: author,message :"CoAuthor added sucessfully" });
  } catch (e) {
    console.log(e);
    return res.status(400).json({ error: "Some error occured" });
  }
};

export default connectDB(addBook);
