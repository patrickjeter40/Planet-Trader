// Import the necessary dependencies
import clientPromise from '../../lib/mongodb';

// Define an endpoint to fetch the first 20 records from the Habitable Exoplanets collection
export default async (req, res) => {
  try {
    // Connect to the MongoDB database using clientPromise
    const client = await clientPromise;
    const db = client.db('ExoplanetRE');
    const collection = db.collection('exoplanets');

    // Fetch the first 20 records from the collection
    const exoplanets = await collection.find().sort({ name: 1 }).limit(9).toArray();
    res.status(200).json(exoplanets);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch exoplanets' });
  }
};