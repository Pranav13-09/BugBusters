import connectDB from "../../utils/connectDB";
import Book from "../../../../models/bookSchema"
import User from "../../../../models/userSchema"
import Review from "@/models/reviewSchema";

const user = async (req, res) => {
  try {
     
      const { review, userId, bookId ,rating} = req.body;
      const newReview = new Review({
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
