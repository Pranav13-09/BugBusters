import connectDB from "../../utils/connectDB";
import transporter from "@/utils/mailUtil";

const user = async (req, res) => {
  try {
    console.log("i am in the mail")
    await transporter.sendMail({
      to: "naishyalspam@gmail.com",
      subject: "Verify Acoount",
      html: `Click here to  reset your password.`,
    });
    return res.status(200).json({ name: "John Doe" });
      
  } catch (err) {
    console.log(err, "i am error");
    return res.status(400).json({ message: "Error" });
  }
};

export default connectDB(user);
