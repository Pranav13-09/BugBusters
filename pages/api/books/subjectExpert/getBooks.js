import connectDB from "@/utils/connectDB";
import Book from "../../../../models/bookSchema";
import SubjectExpert from "../../../../models/subjectExpertSchema";

const submitted = async (req, res) => {
  try {
    const { userID } = req.query;
    const reviewer = await  SubjectExpert.findOne({ _id: userID });
    if (!reviewer) {
      return res.status(400).json({ error: "Not authorized" });
    }
    const books = await Book.aggregate([
      {
        $match: {
          status: 2,
        },
      },
      {
        $lookup: {
          from: "subjectexperts",
          localField: "expertsScore.expert_id",
          foreignField: "_id",
          as: "matchedExperts",
        },
      },
      {
        $match: {
          $expr: {
            $eq: [{ $size: "$matchedExperts" }, 0],
          },
        },
      },
    
    ]);
    res.status(200).json({ books: books });
  } catch (e) {
    console.log(e);
    return res.status(400).json({ error: "Some error occured" });
  }
};

export default connectDB(submitted);
