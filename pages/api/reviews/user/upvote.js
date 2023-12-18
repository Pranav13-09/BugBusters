import connectDB from "../../utils/connectDB";
import Book from "../../../../models/bookSchema"
import User from "../../../../models/userSchema"
import Review from "@/models/reviewSchema";

const user = async (req, res) => {
  try {
     
      const { reviewId,userId,type} = req.body;
      const currUser = await User.find(userId);
      if (!currUser) {
          return res.status(400).json({message:"User not found"})
      }
      const rating = currUser.rating;
      const currReview = await Review.findOne({ _id: reviewId });
      const Ruser = await User.findOne({ _id: currReview.reviewer_id})

      if (type == 1) {
          currReview.upvotes += 1;
          Ruser.rating += 0.02 * rating;
      } else {
          currReview.downvotes += 1;
          Ruser.rating -= 0.02 * rating;
      }

      await currReview.save();
      await Ruser.save()



      return res.status(200).json({ message:"Review Added Successfully"})

  } catch (err) {
    console.log(err, "i am error");
    return res.status(400).json({ message: "Error" });
  }
};

export default connectDB(user);
