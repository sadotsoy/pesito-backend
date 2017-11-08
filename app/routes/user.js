let express = require('express');
let router = express.Router();
let models = require('../db/models');


router.get('/', (req, res, next) => {
  models.User.findAll().then((users) => {
    res.send(users);
  });
});

router.post('/', (req, res, next) => {
  let params = req.parameters;
  let userParams = params.require('user').permit('name','email','password').value();
  models.User.create(userParams).then((user) => {
    res.status(201).send({user:user});
  }).catch((err) => {
    res.status(400).send({error:err.message});
  });
});

module.exports = router;
