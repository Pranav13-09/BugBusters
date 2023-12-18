import connectDB from "@/utils/connectDB";
import Book from "../../../../models/bookSchema";
import Committee from "../../../../models/committeeSchema";

const reviewed = async (req, res) => {
  try {
    const { committeeID } = req.params;
    const committee = Committee.find({ _id: committeeID });
    if (!committee) {
      return res.status(400).json({ error: "Not Authorized" });
    }

    const reviewedBooks = await Book.find({ status: 2 });
    res.json({ books: reviewedBooks });
  } catch (e) {
    console.log(e);
    return res.status(400).json({ error: "Some error occured" });
  }
};

export default connectDB(reviewed);
