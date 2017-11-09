let express = require('express');
let router = express.Router();
let models = require('../db/models');

router.get('/', (req, res, next) => {
  res.send('GOALS!');
})

router.post('/', (req, res, next) => {
  let params = req.parameters;
  let goalsParams = params.require('goal').permit('name','price','period').value();
  models.Goals.create(goalsParams).then((goal) => {
    res.status(201).send({goals:goals});
  }).catch((err) => {
    res.status(400).send({error:err.message});
  });
});

module.exports = router;
