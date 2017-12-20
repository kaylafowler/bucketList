const express = require('express');
const router = express.Router();
const path = require('path');

// this file is all about requiring others, defining dependencies.
// 'require' always looks for an 'index.js' file.
// Whenever you're requiring anything it's pulling in index.js.

router.use('/api/whatever', require('./whatever')); // this tell it what the path name for page called /whatever
// in whatever.js we'll just have to do .get('/') instead of .get('/whatever/');


router.get('/', function (req, res) {
  res.sendFile(__dirname + '../client/public/index.html');
  // or res.json({ data: 'Sup!'});
});
