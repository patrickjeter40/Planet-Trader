import { useSession } from "next-auth/react";
import clientPromise from '../../lib/mongodb';

export default async function callback(req, res) {
  const { email, name, image } = useSession().user;

  try {
    const client = await clientPromise;
    const db = client.db('PlanetTrader');
    const collection = db.collection('users');

    const existingUser = await collection.findOne({ email });

    if (existingUser) {
      console.log('User logged in:', email);
      // Email already exists, reroute to the dashboard page
      res.redirect('/pt/dashboard');
    } else {
      // Email doesn't exist, create a new user document
      const newUser = {
        name,
        username: generateRandomString(10), 
        email,
        profilePicture: image,
        phoneNumber: "",
        planetFav: "",
        planetOwned: "",
        credits: 0
      };

      await collection.insertOne(newUser);

      console.log('New user created:', email);
      res.redirect('/pt/dashboard');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
}

function generateRandomString(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result.slice(0, length); 
}
