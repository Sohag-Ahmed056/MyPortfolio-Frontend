




import { authOptions } from "@/app/helpers/authOptions";
import NextAuth from "next-auth";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };










// import NextAuth, { AuthOptions } from "next-auth";
// import Credentials from "next-auth/providers/credentials";

// export const authOptions: AuthOptions = {
//   providers: [
//     Credentials({
//       name: "Credentials",
//       credentials: {
//         email: { label: "Email", type: "email", placeholder: "you@example.com" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials) {
//         try {
//           // Call your backend login endpoint
//           const res = await fetch("http://localhost:5000/api/v1/auth/login", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({
//               email: credentials?.email,
//               password: credentials?.password,
//             }),
//           });

//           const data = await res.json();

//           if (!res.ok || !data?.data?.user) {
//             throw new Error(data.message || "Invalid credentials");
//           }

//           // Return only the user data from backend
//           return {
//             id: data.data.user.id,
//             name: data.data.user.name,
//             email: data.data.user.email,
//             role: data.data.user.role,
//           };
//         } catch (error) {
//           console.error("Authorize error:", error);
//           return null;
//         }
//       },
//     }),
//   ],

//   session: { strategy: "jwt" },

//   callbacks: {
//     async jwt({ token, user }) {
//       if (user) token.user = user; // store user info in JWT
//       return token;
//     },
//     async session({ session, token }) {
//       session.user = token.user; // make user info available in session
//       return session;
//     },
//   },

//   pages: {
//     signIn: "/login",
//   },

//   secret: process.env.NEXTAUTH_SECRET,
// };

// const handler = NextAuth(authOptions);
// export { handler as GET, handler as POST };
