const express = require('express');
const bodyParser = require('body-parser');

const abc = require('./mongo');

const app = express();
const PORT = process.env.PORT || 8081;

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    res.setHeader(
      'Access-Control-Allow-Methods',
      'GET, POST, PATCH, DELETE, OPTIONS'
    );
    next();
  });
  
//TO GET ALL MEMES
app.get('/memes', abc.getMemes);

//TO CREATE/POST A NEW MEME
app.post('/memes', abc.createMeme);

//TO UPDATE CAPTION OR URL OF MEME SPECIFIC id 
app.patch('/memes/:id', abc.patchMeme) ;

//TO GET DETAILS OF SPECIFIC MEME
app.get('/memes/:id', abc.getMemeById) ;

//SERVER LISTEN ON PORT
app.listen(PORT);