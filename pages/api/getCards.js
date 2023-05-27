
import clientPromise from '../../lib/mongodb';


export default async (req, res) => {
  try {
    // Connect to the MongoDB database using clientPromise
    const client = await clientPromise;
    const db = client.db('PlanetTrader');
    const collection = db.collection('exoplanets');

    
    const exoplanets = await collection.find().sort({ name: 1 }).limit(6).toArray();
    res.status(200).json(exoplanets);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch exoplanets' });
  }
};