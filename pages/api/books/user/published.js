import connectDB from "@/utils/connectDB";
import Book from "../../../../models/bookSchema";
import User from "../../../../models/userSchema";

const published = async (req, res) => {
  try {
    const { userID } = req.query;
    
    const user =  await User.find({ _id: userID });
    if (!user) {
      return res.status(400).json({ error: "Not Authorized" });
    }

    const publishedBooks = await Book.find({ status: 3 });
    res.status(200).json({ books: publishedBooks });
  } catch (e) {
    console.log(e);
    return res.status(400).json({ error: "Some error occured" });
  }
};

export default connectDB(published);
