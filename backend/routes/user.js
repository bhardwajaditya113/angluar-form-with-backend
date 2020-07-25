const express = require('express');
const router = express.Router();
const User = require('../models/user');
var multer = require('multer');

var DIR = './uploads/';
var upload = multer({ dest: DIR }).single('photo');

router.post('/register', (req, res, next) => {
  console.log(req.body);
  const user = new User(req.body);
  user.save()
    .then(result => {
      res.status(201).json({ message: "user created", result: result });
    })
    .catch(error => {
      console.log(error)
      res.status(500).json({ error: error });
    })
});

router.post('/uploadPhoto', (req, res, next) => {
  var path = '';
  console.log(req);
  upload(req, res, function (err) {
    if (err) {
      console.log(err);
      return res.status(422).send("an Error occured")
    }
    console.log(req.file.path)
    path = req.file.path;
    return res.status(200).json({ path: path });
  });
});


module.exports = router;
