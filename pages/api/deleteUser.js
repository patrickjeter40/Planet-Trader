
import clientPromise from '../../lib/mongodb';


export default async (req, res) => {
  try {
  const client = await clientPromise;
  const db = client.db('PlanetTrader');
  const collection = db.collection('users');

  // Retrieve the email address from the request body
  const { email } = req.body;

  // Find the user document based on the provided email address
  const user = await collection.findOne({ email });

  if (user) {
    // Delete the user document
    await collection.deleteOne({ _id: user._id });
    console.log('User deleted successfully!');
    res.status(200).json({ message: 'User deleted successfully!' });
  } else {
    console.log('User not found!');
    res.status(404).json({ message: 'User not found!' });
  }

  // Close the database connection
  client.close();
}
catch (error) {
  console.error('Error deleting user:', error);
  res.status(500).json({ message: 'Error deleting user' });
}
}