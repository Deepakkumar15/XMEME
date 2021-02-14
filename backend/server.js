const express = require('express');
const bodyParser = require('body-parser');

const abc = require('./mongo');


const app = express();


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
  

app.get('/memes', abc.getMemes);

app.post('/memes', abc.createMeme);

app.patch('/memes/:id', abc.updateMemes) ;

app.get('/memes/:id', abc.getMemeById) ;

app.listen(8081);