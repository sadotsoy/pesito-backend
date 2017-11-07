let express = require('express');
let router = express.Router();

// HOMEPAGE - GET - localhost:3000/

router.get('/', (req, res, next) => {
  res.send('HOMEPAGE');
});

module.exports = router;
