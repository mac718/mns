import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import * as bcrypt from "bcrypt";
import User from "../../../models/user";
import connectDB from "../../../middleware/mongodb";
import * as jwt from "jsonwebtoken";

export const authOptions = {
  secret: process.env.NextAuth_SECRET,
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",

      async authorize(credentials, req) {
        const { email, password } = credentials;
        console.log("hello from auth");
        const existingUserFunc = connectDB(async () => {
          const user = await User.findOne({ email });
          return user;
        });

        const existingUser = await existingUserFunc();

        if (!existingUser) {
          return res.status(400).json({ msg: `No user with email ${email}.` });
        }
        const validPass = await bcrypt.compare(password, existingUser.password);
        console.log("valid pass", validPass);
        if (!validPass) {
          return res
            .status(400)
            .json({ msg: "Email and/or password is/are incorrect." });
        }

        const payload = { email: existingUser.email };
        const token = await jwt.sign(payload, process.env.JWT_SECRET, {
          expiresIn: "1h",
        });

        console.log("token", token);

        if (token) {
          return { ...credentials, token };
        } else return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      console.log("token", token);
      if (user) {
        return { ...token, jwt: user.token };
      }
      return Promise.resolve(token);
    },
    async session({ session, token, user }) {
      // Send properties to the client

      if (token) {
        session.jwt = token.jwt;
      }

      console.log("hello", session);

      return await session;
    },
  },
  pages: {
    signIn: "/auth/signin",
  },
};

export default NextAuth(authOptions);
