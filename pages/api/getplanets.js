// Import the necessary dependencies
import clientPromise from '../../lib/mongodb';

// Define an endpoint to fetch the first 20 records from the Habitable Exoplanets collection
export default async (req, res) => {
  try {
    // Connect to the MongoDB database using clientPromise
    const client = await clientPromise;
    const db = client.db('Exoplanets');
    const collection = db.collection('Habitable Exoplanets');

    // Fetch the first 20 records from the collection
    const exoplanets = await collection.find().limit(20).toArray();
    res.status(200).json(exoplanets);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch exoplanets' });
  }
};