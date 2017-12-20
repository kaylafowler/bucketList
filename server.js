const express = require('express');
const parser = require('body-parser');
const server = express();
const path = require('path');

const MongoClient = require('mongodb').MongoClient;

server.use(parser.json());
server.use(express.static('client/'));
server.use(parser.urlencoded({extended: true}));

MongoClient.connect('mongodb://localhost:27017', function(err, client) {
  if(err) {
    console.log(err);
    return;
  }

  const db = client.db("bucket_list");

  console.log("Connect to database");

  server.use(express.static('public'));
  server.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/client/public/index.html'));
  });
  



  server.post('/countries', function(req, res) {

      db.collection('countries').insert( req.body, function(err, result) {
          if(err) {
            console.log(err);
            res.status(500);
            res.send();
            return;
          }

          console.log('Saved to database');
          res.status(201);
          res.json(result.ops[0]);
      });
  });
  //

  server.get('/countries', function(req, res) {


    db.collection('countries').find().toArray(function(err, result) {
      if(err) {
        console.log(err);
        res.status(500);
        res.send();
        return;
      }

      res.json(result);
    });

  });
  //
  //
  server.delete('/countries', function(req, res) {

    db.collection('countries').remove({}, function(err, result) {
      if(err) {
        console.log(err);
        res.status(500);
        res.send();
        return;
      }

      res.status(204);
      res.send();
    });

  });

  server.listen(3000, function(){
    console.log("Listening on port 3000");
  });
});



// Terminal:
// ---------
// Always look at the package.json file to see dependencies and dev dependencies.
// you always have to npm install.
// npm init
// npm install --save express
// npm install nodemon -g
// nodemon server.js
// (Whenever we are working on server.js we'll use nodemon. If it's not changing, we can use npm start)
// if using webpack, run it in the same folder as the config file
// webpack -w (-w means that changes are watched and updated on the hoof, you can then just check terminal to see if the code has errors)
// under "scripts" : "build" in package.json it should have "webpack -w", then you can just type "npm run build"
//
