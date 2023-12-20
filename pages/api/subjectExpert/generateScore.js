import connectDB from "@/utils/connectDB";
import Book from "../../../models/bookSchema";
import SubjectExpert from "../../../models/subjectExpertSchema";
import { getToken } from "next-auth/jwt";
import axios from "axios"

const reviewed = async (req, res) => {
  try {
    const { bookID, expertID, expertRating, summary } = req.body;
    console.log(bookID, expertID,expertRating,summary,"i am bookID");
    const book = await Book.findOne({ _id: bookID });
    if (!book) {
      return res.status(400).json({ error: "Book not found" });
    }

    book.expertsScore.push({
      expert_id: expertID,
      expertScore: expertRating + book.totalCommitteeScore,
      summary: summary,
    });
    console.log(book.expertsScore[0],"i am the okk")
     
    if (book.expertsScore.length >= 3) {
      book.status = 3;
    }

    await book.save();
    res.status(200).json({ message: "Book reviewed successfully" });
  } catch (e) {
    console.log(e);
    return res.status(400).json({ error: "Some error occured" });
  }
};

export default connectDB(reviewed);
