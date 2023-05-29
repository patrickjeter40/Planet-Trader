import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import clientPromise from '../../../lib/mongodb';

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET
    }),
  ],

  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      try {
        const client = await clientPromise;
        const db = client.db('PlanetTrader');
        const collection = db.collection('users');
        

        const existingUser = await collection.findOne({ email: user.email });

        if (!existingUser) {
          // Email doesn't exist, create a new user document
          const newUser = {
            name: user.name,
            username: generateRandomString(10), // Function to generate random string of characters
            email: user.email,
            profilePicture: user.image,
            phoneNumber: "",
            planetFav: [],
            planetOwned: [],
            credits: 0
          };

          await collection.insertOne(newUser);
        }

        return true;
      } catch (error) {
        console.error(error);
        return false;
      }
    }
  }
};

function generateRandomString(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

export default NextAuth(authOptions);
