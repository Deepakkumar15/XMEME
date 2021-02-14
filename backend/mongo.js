const MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

const url = 'mongodb+srv://deepak_15:11911026@cluster0.jsrz1.mongodb.net/memes_db?retryWrites=true&w=majority';

const createMeme = async (req, res, next) => {  
    const newMeme = {
    "name" : req.body.name,
    "caption" : req.body.caption,
    "url" : req.body.url
  };
  
  const client = new MongoClient(url);

  try {
    await client.connect();
    const db = client.db("memes_db");
    db.collection('memes').insertOne(newMeme);
    client.close();
  } catch (error) {
    client.close();
    return res.json({message: 'Could not store data.'});
  };
  
  const resJson = {
    id : newMeme._id
  };
  
  res.json(resJson);
};

const getMemes = async (req, res, next) => {
  const client = new MongoClient(url);
  let memes;

  try {
    await client.connect();
    const db = client.db("memes_db"); 
    memes = await db.collection('memes').find().sort({ "_id": -1 }).limit(100).toArray();
    client.close();
  } catch (error) {
    client.close();
    return res.json({ message: 'Could not retrieve products.' });
  };
  
  memes.forEach((meme)=>{
    meme["id"] = meme["_id"];
    delete meme["_id"];
  });

  return res.json(memes);
}

const getMemeById = async (req, res, next) => {
  const client = new MongoClient(url);
  let meme;

  try {
    await client.connect();
    const db = client.db("memes_db"); 
    const myQuery = {_id : ObjectID(req.params.id)};
    meme = await db.collection('memes').findOne(myQuery);
    client.close();
  } catch (error) {
    res.status(404);
    client.close();
    return res.json({ message: 'Could not retrieve Meme. Please check Id.' });
  }
  
  if(!meme){
    res.status(404);
    return res.json({ message: 'Could not retrieve Meme. Please check Id.' });  
  }

  meme["id"] = meme["_id"];
  delete meme["_id"];

  return res.json(meme);
}

const updateMemes = async (req, res, next) => {
  const client = new MongoClient(url) ;
  let updateMeme ;

  try{
    await client.connect() ;
    const myQuery = {_id : ObjectID(req.params.id)};

    const newValues = { $set: {
      "caption" : req.body.caption,
      "url" : req.body.url
    }} ;

    const db = client.db("memes_db") ;
    updateMeme = await db.collection("memes").updateOne(myQuery, newValues) ;
    client.close();
  } catch(error){
    client.close() ;
    return res.json({message: "could not update the data."});
  };

  return res.json({"updateMeme" : updateMeme}) ;
}


exports.createMeme = createMeme;
exports.getMemes = getMemes;
exports.getMemeById = getMemeById;
exports.updateMemes = updateMemes;
