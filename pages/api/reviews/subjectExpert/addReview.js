import connectDB from "../../utils/connectDB";
import Book from "../../../../models/bookSchema"
import User from "../../../../models/userSchema"
import Review from "@/models/reviewSchema";
import mongoose from "mongoose"

const user = async (req, res) => {
  try {
     
      const { review, expertId, bookId ,rating} = req.body;
    const newReview = new Review({
        _id:new mongoose.Types.ObjectId(),
      reviewer_id: expertId,
      book_id: bookId,
      rating,
      review,
      });
      const savedReview = await newReview.save();
      return res.status(200).json({ message:"Review Added Successfully"})

  } catch (err) {
    console.log(err, "i am error");
    return res.status(400).json({ message: "Error" });
  }
};

export default connectDB(user);
