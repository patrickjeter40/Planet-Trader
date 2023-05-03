import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db("port-proj1");
    const { firstn, lastn } = req.body;
    

    const post = await db.collection("users").insertOne({
        firstn,
        lastn,
      });
      res.json({ redirect: '../' });

    } catch (e) {
      console.error(e);
      throw new Error(e).message;
    }
  };