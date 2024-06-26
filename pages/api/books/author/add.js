import connectDB from "@/utils/connectDB";
import Book from "../../../../models/bookSchema";
import Author from "../../../../models/authorSchema";
import mongoose from "mongoose"
import transporter from "@/utils/mailUtil";

const addBook = async (req, res) => {
  try {
    const { authors,authorID,book} = req.body;
    const author = await Author.findOne({ _id: authorID }).select('degree domain experience ');
    const tempAuthor =   await Author.findOne({ _id: authorID })
    console.log(tempAuthor,"i am author")
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
      image:book.img,
      status: 1,
      totalAuthorScore : totScore
    });

    // Save the new book to the database
    const savedBook = await newBook.save();


    try {
     await transporter.sendMail({
      to: tempAuthor.email,
      subject: "Confirmation of Book Submission",
      html: `Thank you for submitting your book, ${book.name} for review on our platform. We have received your submission and are excited to begin the evaluation process..Our team will carefully review your work. If you have any questions or concerns in the meantime, please don't hesitate to reach out.
      We appreciate your trust in our platform and look forward to the opportunity to explore your manuscript.`,
    });
    } catch (err) {
       console.log(err,"i am err")
    }
    return res.status(200).json({message : "Book Added sucessfully"})
  } catch (e) {
    console.log(e);
    return res.status(400).json({ error: "Some error occured" });
  }
};

export default connectDB(addBook);
