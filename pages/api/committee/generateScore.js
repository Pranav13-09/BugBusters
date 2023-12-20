import connectDB from "@/utils/connectDB";
import Book from "../../../models/bookSchema";
import Committee from "../../../models/committeeSchema";
import { getToken } from "next-auth/jwt";


const reviewed = async (req, res) => {
  try {
      const { bookID, bookScore } = req.body;
      console.log(bookID,bookScore,"i am bookID")
    const book = await  Book.findOne({ _id: bookID });
    if (!book) {
      return res.status(400).json({ error: "Book not found" });
    }
    console.log(book.totalAuthorScore,"i am here")
      const totalScore = book.totalAuthorScore + bookScore;

      if (totalScore < 50 ) {
          book.status = 5;
      } else {
          book.totalCommitteeScore = totalScore;
          book.status = 2;
    }
    
    if (totalScore > 50) {
      const experts = await SubjectExpert.find();
      
    }

      await book.save();
      res.status(200).json({message :"Book reviewed successfully"});
  } catch (e) {
    console.log(e);
    return res.status(400).json({ error: "Some error occured" });
  }
};

export default connectDB(reviewed);
