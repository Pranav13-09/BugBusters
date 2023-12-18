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
  status: {
    type: Integer,
  },
  author_id: {
     type: mongoose.Schema.Types.ObjectId,
        ref: "Author",
        required : true
  }



});

export default mongoose.models.Book || mongoose.model("Book", bookSchema);
