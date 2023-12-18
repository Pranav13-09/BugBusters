import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  status: {
    type: Number,
  },
  author_id: {
     type: mongoose.Schema.Types.ObjectId,
        ref: "Author",
        required : true
  },
  category: {
    type :String
  },
  image: {
    type :String
  },
  userRating: {
    type: Number,
    default:0
  },
  expertRating: {
    type:Number
  },
  userRatingSum :{
    type: Number,
    default:0
  },
  expertReviews: [
    {
      expert_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubjectExpert",
      },
      review: {
        type:String
      },
      rating: {
        type:Number
      }

    },
  ],


});

export default mongoose.models.Book || mongoose.model("Book", bookSchema);
