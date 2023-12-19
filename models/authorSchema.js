import mongoose from "mongoose";

const authorSchema = mongoose.Schema({
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
    default :"author"
  },
  degree: {
    type : Number
  },
  domain: {
    type:String
  },
  experience: {
    type :Number
  }
});

export default mongoose.models.Author || mongoose.model("Author", authorSchema);
