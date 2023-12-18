import connectDB from "../../../../utils/connectDB";
import Book from "../../../../models/bookSchema"
import User from "../../../../models/userSchema"
import Review from "@/models/reviewSchema";
import mongoose from "mongoose";
const user = async (req, res) => {
  try {
     
    const { review, userId, bookId, rating } = req.body;
    console.log(req.body,"i am here")
    const newReview = new Review({
        _id:new mongoose.Types.ObjectId(),
      reviewer_id: userId,
      book_id: bookId,
      rating,
      review,
      });
      const savedReview = await newReview.save();

      const currBook = await Book.findOne({ _id: bookId });
    const currUser = await User.findOne({ _id: userId });
      let cumRating = currBook.userRating * currBook.userRatingSum;
    cumRating += (rating * currUser.rating);
    
    console.log(cumRating, "i am cumRtaing")
    console.log(currBook.userRatingSum,"i am user rating sum")

      currBook.userRatingSum += currUser.rating;
      const finalRating = cumRating / currBook.userRatingSum;
      currBook.userRating = finalRating;
      await currBook.save();

      return res.status(200).json({ message:"Review Added Successfully"})

  } catch (err) {
    console.log(err, "i am error");
    return res.status(400).json({ message: "Error" });
  }
};

export default connectDB(user);
