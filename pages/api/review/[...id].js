import mongoose from "mongoose";
import connectDB from "../../../utils/connectDB";
import reviewSchema from "@/models/reviewSchema";

const review = async (req, res) => {
  try {
    const Id = new mongoose.Types.ObjectId();
    console.log(req.query.id[0]);
    const book_id= req.body.book_id;
    const newReview = new reviewSchema({
      _id: Id,
      reviewer_id: req.query.id[0],
      review: req.body.review,
      book_id: req.body.book_id,  
      
    });
    console.log("JADUM",newReview);
    await newReview.save();
    return   res.status(200).json({message:"Review Saved Successfully"});
  }
  catch (err) {
    console.log(err, "i am error");
    return res.status(400).json({message:"Error saving the Review"})
  }
 
};

export default connectDB(review);

