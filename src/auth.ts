import bcrypt from "bcryptjs";
import NextAuth, {User} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { ZodError } from "zod";
import { signInSchema } from "./lib/zod";
import { saltAndHashPassword } from "@/utils/password";
import { getUserFromDb } from "@/utils/db";

const dummyUsers = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    password: bcrypt.hashSync("password123", 10), // Hashed password
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    password: bcrypt.hashSync("secret456", 10),
  },
  {
    id: "3",
    name: "Alice Johnson",
    email: "alice@example.com",
    password: bcrypt.hashSync("mypassword789", 10),
  },
  {
    id: "4",
    name: "Bob Brown",
    email: "bob@example.com",
    password: bcrypt.hashSync("pass1234", 10),
  },
  {
    id: "5",
    name: "Charlie Davis",
    email: "charlie@example.com",
    password: bcrypt.hashSync("qwerty567", 10),
  },
];

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "email@example.com" },
        password: { label: "Password", type: "password" }, //password must be minimum 8 characters long
      },
      authorize: async (credentials) => {
        console.log(credentials);
        try {
          const { email, password } = await signInSchema.parseAsync(credentials);

          // Logic to salt and hash password
          // const pwHash = saltAndHashPassword(password);

          // Logic to verify if the user exists
          const userFromDb = dummyUsers.find((user) => user.email === email);

          if (!userFromDb) {
            return null; // Return null if authentication fails
          }

          const passwordMatches = bcrypt.compareSync(password, userFromDb.password);

          if (!passwordMatches) {
            return null; // Password does not match
          }

          const user: User = {
            id: userFromDb.id,           // Ensure 'id' is included
            name: userFromDb.name,       // Include 'name' if available
            email: userFromDb.email,     // Include 'email'
            // Add other properties as needed
          };
          // Return user object on successful authentication
          return user;
        } catch (error) {
          if (error instanceof ZodError) {
            return null; // Return null if validation fails
          }
          throw error; // Throw other errors to be handled by NextAuth
        }
      },
    }),
  ],
  callbacks: {
    async redirect({ url, baseUrl }) {
      // Redirect to /dashboard after successful sign-in
      return `${baseUrl}/dashboard`;
    },
  },
});

export { handler as GET, handler as POST };
