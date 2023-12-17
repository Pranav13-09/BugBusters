import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import Author from "../../../../models/authorSchema"
import User from "../../../../models/userSchema"
import SubjectExpert from "@/models/subjectExpertSchema";
import connectDB from "@/utils/connectDB";
import { verifyPassword } from "@/utils/auth";

export const authOptions  = NextAuth({
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/home",
    register : "/home"
  },
  providers: [
 
    CredentialsProvider({
       
       name: "Credentials",
       
       async authorize(credentials, req) {
         const { email, password, type } = credentials;
         console.log(email,password,type,"i am here")
        let netizen;
         if (type === "user") {
          console.log("here in user")
           netizen = await User.findOne({ email });
           console.log("okk")
           console.log(netizen,"i am netizen")
        } else if (type === "author") {
          netizen = await Author.findOne({ email });
        } else {
          netizen = await SubjectExpert.findOne({ email });
         }
         
         console.log(netizen ,"ia m here")

         if (netizen) {
          console.log("why bro why")
          // Any object returned will be saved in `user` property of the JWT
          const isValid = await verifyPassword(
          password,
            netizen.password
          );

          console.log(isValid,"i am here")

          if (!isValid) {
            return null;
          }

          return {
            email:netizen.email,
            username: netizen.username,
            userId:netizen._id,
            role : type,
          };
        } else {
          console.log("i am from here okk")
          return null;
        }
      },
       
    }),
  ],
   callbacks: {
    session: async (session) => {
      if (!session) return;

      const userData = await User.findOne({
        email: session.session.user.email,
      });

      return {
        user: {
          id: userData._id,
          email: userData.email,
          role: "user"

        },
      };
    },
  },
});

export default connectDB(authOptions);
