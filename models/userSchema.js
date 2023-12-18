import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
    role: {
    type: String,
    default :"user"
  },
  rating: {
    type: Number,
    default:1
    }
});

export default mongoose.models.User || mongoose.model("User", userSchema);
