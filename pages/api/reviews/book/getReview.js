import connectDB from "../../../../utils/connectDB";
import Book from "../../../../models/bookSchema"
import User from "../../../../models/userSchema"
import Review from "@/models/reviewSchema";
import mongoose from "mongoose";
const user = async (req, res) => {
  try {
    const { bookID } = req.query;
      console.log(req.body, "i am here")
      const reviews = await Review.find({ book_id: bookID });
      return res.status(200).json({reviews:reviews})
  } catch (err) {
    console.log(err, "i am error");
    return res.status(400).json({ message: "Error" });
  }
};

export default connectDB(user);
