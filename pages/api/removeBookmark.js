import clientPromise from '../../lib/mongodb';

export default async (req, res) => {
  try {
    const { userEmail, exoplanetName } = req.body;

    // Connect to the MongoDB database using clientPromise
    const client = await clientPromise;
    const db = client.db('PlanetTrader');
    const collection = db.collection('users');

    // Find the user document matching the email and update the planetFav property
    const result = await collection.updateOne(
      { email: userEmail },
      { $pull: { planetFav: exoplanetName } } // Use $pull to remove exoplanetId from planetFav array
    );

    // Check if the update was successful
    if (result.modifiedCount === 1) {
      // Respond with a success message
      res.status(200).json("User record updated successfully");
    } else {
      // If no matching user document is found, respond with false
      res.status(200).json(false);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update user record' });
  }
};
