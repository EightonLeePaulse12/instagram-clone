import { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import GoogleProvider from 'next-auth/providers/google'

export const config = {
  pages: {
    signIn: "/login",
  },
  adapter: PrismaAdapter(prisma) as any,
  providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    })
  ]
} satisfies NextAuthOptions;
