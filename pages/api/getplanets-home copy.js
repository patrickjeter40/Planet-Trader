// Import the necessary dependencies
import clientPromise from '../../lib/mongodb';
import { useSession } from "next-auth/react";
// Define an endpoint to fetch the first 20 records from the Habitable Exoplanets collection
export default async (req, res) => {
  const { data: session } = useSession();
  
  try {
    // Connect to the MongoDB database using clientPromise
    const client = await clientPromise;
    const db = client.db('PlanetTrader');
    const collection = db.collection('exoplanets');

    // Fetch the first 20 records from the collection
    const exoplanets = await collection.find().sort({ name: 1 }).limit(6).toArray();
    res.status(200).json(exoplanets);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch exoplanets' });
  }
};