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
  author_id: [
      {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Author"
  }
],
  image: {
    type: String,
  },
  userRating: {
    type: Number,
    default: 0,
  },
  expertRating: {
    type: Number,
  },
  userRatingSum: {
    type: Number,
    default: 0,
  },
  approved: {
    type: Boolean,
    default : false
  },
  recommended: {
    type: Boolean,
    default : false
  },
  totalAuthorScore :{
    type:Number
  },
  totalCommitteeScore: {
    type: Number
  },
  regret: {
    type : "String"
  },
  expertsScore: [
    {
      expert_id: {
         type :  mongoose.Schema.Types.ObjectId,
        ref: "Book",
      },
      expertScore: {
        type :Number
      },
      summary: {
        type :String
      }
    }
  ],
  selectedReviews: [
    {
      expert_id: {
         type :  mongoose.Schema.Types.ObjectId,
        ref: "Book",
      },
      expertScore: {
        type :Number
      },
      summary: {
        type :String
      }
    }
  ],
  finalEvaluationScore: {
    type : Number
  }

});

export default mongoose.models.Book || mongoose.model("Book", bookSchema);
