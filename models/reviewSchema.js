
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
    type: Integer,
    default: 0,
  },

  downvotes:{
    type: Integer,
    default: 0,
  }
 
});

export default mongoose.models.Review || mongoose.model('Review', reviewSchema);
