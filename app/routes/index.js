let express = require('express');
let path = require('path');
let router = express.Router();

// HOMEPAGE - GET - localhost:3000/

router.get('/', (req, res, next) => {
  res.send('WELCOME TO PESITO');
});

module.exports = router;
