import connectDB from "@/utils/connectDB";
import Book from "../../../../models/bookSchema";
import SubjectExpert from "../../../../models/subjectExpertSchema";

const submitted = async (req, res) => {
  try {
    const { reviewerID } = req.params();
    const reviewer = SubjectExpert.find({ _id: reviewerID });
    if (!reviewer) {
      return res.status(400).json({ error: "Not authorized" });
    }

    const submittedBooks = await Book.find({ status: 1 });
    res.json({ books: submittedBooks });
  } catch (e) {
    console.log(e);
    return res.status(400).json({ error: "Some error occured" });
  }
};

export default connectDB(submitted);
