import connectDB from "@/utils/connectDB";
import Book from "../../../../models/bookSchema";
import SubjectExpert from "../../../../models/subjectExpertSchema";

const submitted = async (req, res) => {
  try {
    const { reviewerID } = req.query;
    const reviewer = await  SubjectExpert.find({ _id: reviewerID });
    if (!reviewer) {
      return res.status(400).json({ error: "Not authorized" });
    }
    const submittedBooks = await Book.find({ status: 1 });
    res.status(200).json({ books: submittedBooks });
  } catch (e) {
    console.log(e);
    return res.status(400).json({ error: "Some error occured" });
  }
};

export default connectDB(submitted);
