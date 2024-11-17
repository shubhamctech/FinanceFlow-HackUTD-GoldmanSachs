import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from 'next-auth/providers/google';
import GitHubProvider from 'next-auth/providers/github';

export const {
    handlers: {GET, POST}, 
    signIn, 
    signOut, 
    auth } = NextAuth({
    secret: process.env.AUTH_SECRET,
    session: {
        strategy: "jwt",
        maxAge: 60 * 60,
    },
    pages:{
        signIn: "/auth/login"
    },
  providers: [
    // OAuth authentication providers...
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: { 
        params: {
            prompt: "consent",
            access_type: "offline",
        }
      }
    })
    // Passwordless / email sign in
  ],
  callbacks: {
    async jwt({ token, user }) {
        if( user ){
            return{
                ...token,
                id: user.id,
            };
        }
        return token;
    },
    async session({ session, token }){
        console.log("session callback", {session, token});
        return {
            ...session,
            user: {
                ...session.user,
                id:token.id as string,
            }
        }
    }
  }
})