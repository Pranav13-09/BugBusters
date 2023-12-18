import mongoose from "mongoose";

const CommitteeSchema = mongoose.Schema({
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
    default :"committee"
  }
});

export default mongoose.models.Committee ||
  mongoose.model("Committee", CommitteeSchema);
