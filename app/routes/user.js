let express = require('express');
let router = express.Router();


router.get('/', (req, res, next) => {
  res.json([{
    id: 1,
    username: "Sam"
  }, {
    id:2,
    username: "Sad"
  }]);
});

module.exports = router;
