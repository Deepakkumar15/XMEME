const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb+srv://deepak_15:11911026@cluster0.jsrz1.mongodb.net/memes_db?retryWrites=true&w=majority';

const createMeme = async (req, res, next) => {
  
    const newMeme = {
    "title" : req.body.title,
    "caption" : req.body.caption,
    "url" : req.body.url
  };
  
  const client = new MongoClient(url);

  try {
    await client.connect();
    const db = client.db("memes_db");
    db.collection('memes').insertOne(newMeme);
  } catch (error) {
    return res.json({message: 'Could not store data.'});
  };
  client.close();

  res.json(newMeme);
};


const getMemes = async (req, res, next) => {
  const client = new MongoClient(url);
  let memes;

  try {
    await client.connect();
    const db = client.db("memes_db"); 
    console.log("-------------------------------------1");
    memes = await db.collection('memes').find().sort({ "_id": -1 }).limit(100).toArray();
    console.log("---------------------2----------------");
    console.log(memes);

  } catch (error) {
    return res.json({ message: 'Could not retrieve products.' });
  };
  client.close();

  return res.json({"memes": memes});
}

exports.createMeme = createMeme;
exports.getMemes = getMemes;
