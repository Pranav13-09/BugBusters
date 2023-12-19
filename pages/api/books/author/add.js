import connectDB from "@/utils/connectDB";
import Book from "../../../../models/bookSchema";
import Author from "../../../../models/authorSchema";
import mongoose from "mongoose"

const addBook = async (req, res) => {
  try {
    const { authors,authorID,book} = req.body;
    const author = await Author.findOne({ _id: authorID }).select('degree domain experience');
    authors.push(author)
    let total = authors.length;
    console.log(authors , "i am suthotrs",total)
    if (!author) {
      return res.status(400).json({ error: "Not authorized" });
    }
    const numAuthor = Math.min(authors.length * 2, 10);

    let totQualification = 0;
    let totExperience = 0;
    let totCount = 0;
    const authorIds =[]
    
    for (const author of authors) {
      authorIds.push(author._id)
      if (author.degree == 3) {
        totQualification += 5;
      } else if (author.domain === book.category) {
        if (author.degree == 1) {
          totQualification+=2
        } else if (author.degree == 2) {
          totQualification+=4
        }
      } else {
         if (author.degree == 1) {
          totQualification+=1
        } else if (author.degree == 2) {
          totQualification+=3
        }
      }
      totExperience += author.experience;
      const count = await Book.countDocuments({
      recommended: true,
      author_id: { $elemMatch: { $eq: author._id } } 
    });
      totCount += count;
    }

    let finalQualification = Math.min((totQualification / total), 5)
    let finalExperience = Math.min((totExperience / total), 5);
    let finalRscore = Math.min(5 * totCount, 20);

    let totScore = numAuthor + finalQualification + finalExperience + finalRscore;
    console.log(finalExperience,finalQualification,finalRscore,totScore,"i amscoer")
    const newBook = new Book({
      _id :new mongoose.Types.ObjectId(),
      name:book.name,
      category:book.category,
      author_id: authorIds,
      image:book.image,
      status: 0,
      totalAuthorScore : totScore
    });

    // Save the new book to the database
    const savedBook = await newBook.save();
    console.log(savedBook,"i am book")
    return res.status(200).json({message : "Book Added sucessfully"})


  } catch (e) {
    console.log(e);
    return res.status(400).json({ error: "Some error occured" });
  }
};

export default connectDB(addBook);
