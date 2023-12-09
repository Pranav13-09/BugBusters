import { hash } from "bcrypt";
const { Author, SubjectExpert, User } = require("../../../../models");

export default async function register(req, res) {
  try {
    const { name, email, password, type } = req.body;

    const author = await Author.findOne({ email });
    const subjectExpert = await SubjectExpert.findOne({ email });
    const user = await User.findOne({ email });
    if (author || subjectExpert || user) {
      return res.json({ error: "Email already exists" });
    }

    const hashedPassword = await hash(password, 10);
    if (type === "author") {
      await Author.create({ name, email, hashedPassword });
    } else if (type === "subjectExpert") {
      await SubjectExpert.create({ name, email, hashedPassword });
    } else {
      await User.create({ name, email, hashedPassword });
    }
  } catch (e) {
    console.log({ e });
  }

  return res.json({ message: "success" });
}
