
import mongoose from "mongoose";


const reviewSchema = mongoose.Schema({
  _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
  },

  review: {
        type: String,
        required : true
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

  score:{
    type: Number,
    default:0,
  }
 
});

export default mongoose.models.Review || mongoose.model('Review', reviewSchema);
