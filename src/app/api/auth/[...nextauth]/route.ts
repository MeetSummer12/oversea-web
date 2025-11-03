import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

// NextAuth v4 (current dependency) App Router style:
// Export a handler as both GET and POST.
// Google OAuth will be enabled when env vars are present.
const providers: any[] = [];

if (process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET) {
  providers.push(
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    })
  );
}

const handler = NextAuth({
  providers,
});

export { handler as GET, handler as POST };