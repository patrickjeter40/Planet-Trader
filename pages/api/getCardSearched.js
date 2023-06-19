import clientPromise from '../../lib/mongodb';

export default async (req, res) => {
  try {
    const { query } = req.query;

    // Connect to the MongoDB database using clientPromise
    const client = await clientPromise;
    const db = client.db('PlanetTrader');
    const collection = db.collection('exoplanets');

    // Find up to 20 documents that contain the searchValue in the documents property of 'PLANET'
    const exoplanets = await collection
      .find({ pl_name: { $regex: query, $options: 'i' } })
      .limit(15)
      .toArray();

    res.status(200).json(exoplanets);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch exoplanets' });
  }
};
