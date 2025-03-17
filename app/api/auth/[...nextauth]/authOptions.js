import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import User from "../../../../models/user";
import connectToDatabase from "../../../../lib/db";
import bcrypt from "bcryptjs";

export const authOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "you@example.com"
        },
        password: {
          label: "Password",
          type: "password"
        },
      },
      async authorize(credentials) {
        try {
          await connectToDatabase();
          // Find the user by email
          const user = await User.findOne({ email: credentials?.email });
          if (!user)
            throw new Error("No user found with that email.");
          // Compare the password with the hashed password
          const isValidPassword = await bcrypt.compare(
            credentials?.password || "",
            user.password
          );
          if (!isValidPassword)
            throw new Error("Invalid password.");
          return user;
        } catch (error) {
          console.error("Authorize error:", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ account, profile }) {
      if (account?.provider === "github") {
        await connectToDatabase();
        const existingUser = await User.findOne({ email: profile?.email });
        if (!existingUser) {
          await User.create({
            name: profile?.name || profile?.login,
            email: profile?.email,
            role: "student",
          });
        }
      }
      return true;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user._id.toString();
        token.email = user.email;
        token.name = user.name;
        token.role = user.role || "student";
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user = {
          id: token.id,
          email: token.email,
          name: token.name,
          role: token.role || "student",
        };
      }
      return session;
    },
  },
  pages: {
    signIn: "/sign-in",
  },
  secret: process.env.NEXTAUTH_SECRET,
};
