import connectDB from "@/utils/connectDB";
import Book from "../../../models/bookSchema";
import SubjectExpert from "../../../models/subjectExpertSchema";
import { getToken } from "next-auth/jwt";

const reviewed = async (req, res) => {
  try {
    const { bookID, expertID, bookScore, summary } = req.body;
    console.log(bookID, "i am bookID");
    const book = await Book.findOne({ _id: bookID });
    if (!book) {
      return res.status(400).json({ error: "Book not found" });
    }

    book.expertsScore.append({
      expert_id: expertID,
      expertScore: bookScore,
      summary: summary,
    });
    book.status = 3;

    await book.save();
    res.status(200).json({ message: "Book reviewed successfully" });
  } catch (e) {
    console.log(e);
    return res.status(400).json({ error: "Some error occured" });
  }
};

export default connectDB(reviewed);
