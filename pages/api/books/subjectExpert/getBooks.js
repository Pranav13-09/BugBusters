import connectDB from "@/utils/connectDB";
import Book from "../../../../models/bookSchema";
import SubjectExpert from "../../../../models/subjectExpertSchema";

const submitted = async (req, res) => {
  try {
    const { userID } = req.query;
    const reviewer = await SubjectExpert.findOne({ _id: userID });
    if (!reviewer) {
      return res.status(400).json({ error: "Not authorized" });
    }
    const books = await Book.find({
      status: 2,
      "expertsScore.expert_id": { $ne: userID },
    });
    res.status(200).json({ books: books });
  } catch (e) {
    console.log(e);
    return res.status(400).json({ error: "Some error occured" });
  }
};

export default connectDB(submitted);
