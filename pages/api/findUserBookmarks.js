import clientPromise from '../../lib/mongodb';

export default async (req, res) => {
  try {
    const { userEmail } = req.query; // Retrieve the userEmail from the query parameter

    // Connect to the MongoDB database using clientPromise
    const client = await clientPromise;
    const db = client.db('PlanetTrader');
    const exoplanetsCollection = db.collection('exoplanets');
    const usersCollection = db.collection('users');

    // Find the user document matching the email
    const user = await usersCollection.findOne({ email: userEmail });

    if (!user) {
      return res.status(200).json([]); // Return an empty array if no user is found
    }

    // Extract the planetFav array from the user document
    const planetFav = user.planetFav;

    // Find the exoplanets documents where PLANET property matches a value in planetFav
    const exoplanets = await exoplanetsCollection.find({ pl_name: { $in: planetFav } }).toArray();

    res.status(200).json(exoplanets);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch exoplanets' });
  }
};
