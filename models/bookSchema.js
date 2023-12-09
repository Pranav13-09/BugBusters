import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  name: {

  },
});

export default mongoose.models.Book || mongoose.model("Book", bookSchema);
