import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";
const { Author, SubjectExpert, User } = require("../../../../models");

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
        type: {},
      },
      async authorize(credentials, req) {
        const { email, password, type } = credentials;

        let response;
        if (type === "user") {
          response = await User.findOne({ email });
        } else if (type === "author") {
          response = await Author.findOne({ email });
        } else {
          response = await SubjectExpert.findOne({ email });
        }

        const passwordCorrect = await compare(password, response.password);

        if (passwordCorrect) {
          return {
            id: response.id,
            email: response.email,
          };
        }

        return null;
      },
    }),
  ],
});

export default handler;
