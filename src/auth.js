import NextAuth from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import User from "./models/user.model";

export const { handlers, auth, signIn, signOut } = NextAuth({
 
  
  session: {
    strategy:"jwt"
  },

  providers: [
    CredentialProvider({
      credentials: {
        email: {},
        password: {}
      },
      async authorize(credentials) {
        if (credentials === null) return null;

        try {
          const user = await User.findOne({ email: credentials?.email });
          
          if (user) {
            
            const isMatch = await bcrypt.compare(credentials.password, user.password);
            console.log("🔍 Password match status:", isMatch);

            if (isMatch) { 
              return user;
            } else {
              throw new Error("Email or password is not correct");
            }
          } else {
            throw new Error("User not found");
          }
        }catch (error) {
          console.error("❌ Authorization error:", error);
          return null;
        }
      }
    })
  ]
});
