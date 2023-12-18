
import mongoose from "mongoose";
const reviewSchema = mongoose.Schema({
  _id: {
      type: mongoose.Schema.Types.ObjectId,
      required : true
  },
  review: {
        type: String,
  },
  reviewer_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required : true
  },
  book_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Book",
        required : true
  },
  upvotes:{
    type: Number,
    default: 0,
  },
  downvotes:{
    type: Number,
    default: 0,
 },
 rating: {
    type: Number,
   required:true
  }
 
});

export default mongoose.models.Review || mongoose.model('Review', reviewSchema);
