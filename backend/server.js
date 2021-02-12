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
  

app.get('/test1', abc.getMemes);

app.post('/test2', abc.createMeme);

app.listen(5000);