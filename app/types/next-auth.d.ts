// import NextAuth, { DefaultSession, DefaultUser } from "next-auth"

// declare module "next-auth" {
//   interface User extends DefaultUser {
//     token?: string
//     role?: string
//   }

//   interface Session extends DefaultSession {
//     user: {
//       id?: string
//       name?: string | null
//       email?: string | null
//       role?: string
//     }
//     accessToken?: string
//   }
// }

// declare module "next-auth/jwt" {
//   interface JWT {
//     user?: {
//       id?: string
//       name?: string | null
//       email?: string | null
//       role?: string
//     }
//     accessToken?: string
//   }
// }
