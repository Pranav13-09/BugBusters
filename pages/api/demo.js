import connectDB from "../../utils/connectDB";
import { exec } from "child_process";
const user = async (req, res) => {

    const text="hello i am here.I love you"
 const translatedTextPromise = new Promise((resolve, reject) => {
		exec(
			`cmd /c ".\\virenv\\Scripts\\activate && python translate.py "${text}"`,
			(error, stdout, stderr) => {
				if (error) {
					console.error(`exec error: ${error}`);
					reject(error);
				}
				resolve(stdout);
			}
		);
	});

	const translatedText = await translatedTextPromise;
    console.log(translatedText, "i am here ")
    return res.status(200).json({text:translatedText})
};

export default connectDB(user);