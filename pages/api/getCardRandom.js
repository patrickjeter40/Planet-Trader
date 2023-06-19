import { ObjectId } from 'mongodb';
import clientPromise from '../../lib/mongodb';

export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db('PlanetTrader');
    const exoplanets = db.collection('exoplanets');

    // Get the total count of documents in the exoplanets collection
    const totalCount = await exoplanets.countDocuments();

    
    const randomIndex = Math.floor(Math.random() * totalCount);


    const randomExoplanet = await exoplanets.findOne({}, { skip: randomIndex });

    if (!randomExoplanet) {
      throw new Error('No random exoplanet found');
    }

    // Send the random exoplanet ID as a JSON response
    res.status(200).json({ randomExoplanetId: randomExoplanet._id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred' });
  }
}
