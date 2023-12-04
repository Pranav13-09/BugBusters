
import mongoose from "mongoose";


const bookSchema = mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
name: {
        type: String,
        required : true
  },
 
});

export default mongoose.models.Book || mongoose.model('Book', bookSchema);
