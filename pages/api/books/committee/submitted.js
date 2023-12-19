import connectDB from "@/utils/connectDB";
import Book from "../../../../models/bookSchema";
import Committee from "../../../../models/committeeSchema";
import { getToken } from "next-auth/jwt";


const reviewed = async (req, res) => {
  try {
    const { committeeID } = req.query;
    const committee = await Committee.find({ _id: committeeID });
    if (!committee) {
      return res.status(400).json({ error: "Not Authorized" });
    }

    const reviewedBooks = await Book.find({ status: 1 });
    res.status(200).json({ books: reviewedBooks });
  } catch (e) {
    console.log(e);
    return res.status(400).json({ error: "Some error occured" });
  }
};

export default connectDB(reviewed);
