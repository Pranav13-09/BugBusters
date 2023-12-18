
import mongoose from "mongoose";
const ExpertReviewSchema = mongoose.Schema({
  _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
  },
  review: {
        type: String,
        required : true
  },
  expert_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubjectExpert",
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

export default mongoose.models.ExpertReview || mongoose.model('ExpertReview', ExpertReviewSchema);
