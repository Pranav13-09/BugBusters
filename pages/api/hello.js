import connectDB from "../../utils/connectDB";

const user = async (req, res) => {
  try {
   return   res.status(200).json({ name: 'John Doe' })
  }
  catch (err) {
    console.log(err, "i am error");
    return res.status(400).json({message:"Error"})
  }
 
};

export default connectDB(user);

