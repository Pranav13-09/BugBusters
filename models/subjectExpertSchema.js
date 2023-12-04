
import mongoose from "mongoose";


const subjectExpertSchema = mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
name: {
        type: String,
        required : true
  },
 
});

export default mongoose.models.SubjectExpert || mongoose.model('SubjectExpert', subjectExpertSchema);
