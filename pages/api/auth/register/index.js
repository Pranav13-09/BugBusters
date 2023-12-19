import { hash } from "bcrypt";
import mongoose from "mongoose";
import Author from "../../../../models/authorSchema";
import User from "../../../../models/userSchema";
import SubjectExpert from "@/models/subjectExpertSchema";
import Committee from "../../../../models/committeeSchema"
import connectDB from "@/utils/connectDB";

const register = async (req, res) => {
  try {
    const { name, email, password, type,info } = req.body;
    console.log(name, email, password, type, "i am here");

    const author = await Author.findOne({ email });
    const subjectExpert = await SubjectExpert.findOne({ email });
    const user = await User.findOne({ email });
    const committee = await Committee.findOne({email})

    if (author || subjectExpert || user || committee) {
      console.log(author, "ok", subjectExpert, "ok1", user, "here");
      console.log("error found duplicate");
      return res.status(200).json({ error: "Email already exists" });
    }
    const hashedPassword = await hash(password, 10);
    console.log(hashedPassword, "i am hashed");
    const Id = new mongoose.Types.ObjectId();
    console.log("below here");
    if (type === "author") {
      await Author.create({ _id: Id, name, email, password: hashedPassword ,degree:info.degree,experience:info.experience,domain:info.domain});
    } else if (type === "subjectExpert") {
      await SubjectExpert.create({
        _id: Id,
        name,
        email,
        password: hashedPassword,
      });
    } else if(type ==="user") {
      console.log("creating");
      await User.create({ _id: Id, name, email, password: hashedPassword });
    } else {
      await Committee.create({_id: Id, name, email, password: hashedPassword})
    }
    console.log("sucessful okk");
    return res.status(200).json({ message: "Created Sucessfilly" });
  } catch (e) {
    console.log(e);
    return res.status(400).json({ error: "Some error occured" });
  }
};

export default connectDB(register);
