import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

// Configure NextAuth for App Router
// Google OAuth will be enabled when env vars are present.
const providers = [] as any[];

if (process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET) {
  providers.push(
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    })
  );
}

// Note: Email Provider is intentionally not imported to avoid bundling nodemailer.
// If you need magic-link email sign-in later, we can add it with a dynamic import
// or install 'nodemailer' and enable it explicitly.

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  providers,
});