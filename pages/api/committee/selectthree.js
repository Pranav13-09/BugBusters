import connectDB from "@/utils/connectDB";
import Book from "../../../models/bookSchema";
import Committee from "../../../models/committeeSchema";
import { getToken } from "next-auth/jwt";


const reviewed = async (req, res) => {
  try {
      const { topThree, bookID } = req.body;
      const book = await Book.findOne({ _id: bookID })
      if (!book) {
          return res.status(400).json({message : "Book Not found"})
      }
      const x = 50; // Set your threshold value here
      let check = true;
      let totalFinalScore = 0;

      topThree.forEach((item) => {
          totalFinalScore += item.expertScore;
            if (item.expertScore < x) { 
                check = false;
            }
        });
      
      if (check == false) {
          book.status = 5;
          await book.save();
          return res.status(200).json({message : "Book Discarded due to unsufficient score "})
      }
      const myArray = topThree.map(({ _id, ...rest }) => rest);
      book.selectedReviews = myArray;
      book.status = 4;
      book.finalEvaluationScore = totalFinalScore / 3;
      return res.status(200).json({message:"Book sucessfully Published"})
  } catch (e) {
    console.log(e);
    return res.status(400).json({ error: "Some error occured" });
  }
};

export default connectDB(reviewed);
