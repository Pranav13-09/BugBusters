
import mongoose from "mongoose";


const userSchema = mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
name: {
        type: String,
        required : true
  },
 
});

export default mongoose.models.User || mongoose.model('User', userSchema);
