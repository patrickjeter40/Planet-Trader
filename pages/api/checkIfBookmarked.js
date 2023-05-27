import clientPromise from '../../lib/mongodb';

export default async (req, res) => {
  try {
    const { exoplanetId, userEmail } = req.body;

    // Connect to the MongoDB database using clientPromise
    const client = await clientPromise;
    const db = client.db('PlanetTrader');
    const collection = db.collection('users');

    // Find the user document matching the email and exoplanetId criteria
    let user = await collection.findOne({
      email: userEmail,
      planetFav: exoplanetId,
    });

    if (!user) {

      res.status(200).json(false);
    }

    // Respond with the updated user document or false if no user is found
    res.status(200).json(true);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch user' });
  }
};
