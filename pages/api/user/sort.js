import connectDB from "@/utils/connectDB";
import Book from "../../../../models/bookSchema";
import Author from "../../../../models/authorSchema";
import User from "../../../models/userSchema"

const sort = async (req, res) => {
  try {
    const { userID } = req.body;
      const user = await User.findOne({ _id: userID })
    
    if (!user) {
      return res.status(400).json({ error: "User Not Found" });
    }
     const filteredBooks = await Book.find({
      status: 4,
      Category: desiredCategory,
    })
      .sort({ finalEvaluationScore: -1 }) // Sort by finalEvaluationScore in descending order
      .exec();
      
      return res.status(200).json({books:filteredBooks})
  } catch (e) {
    console.log(e);
    return res.status(400).json({ error: "Some error occured" });
  }
};

export default connectDB(addBook);
