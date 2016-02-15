'use strict';

var Firebase = require('firebase');
var express = require('express');
var router = express.Router();

var User = require('../model/usermodel');






router.get('/all',  function(req, res, next){
console.log("INNNN")
  User.find({}, function(err, usersAll){
    console.log('all users', usersAll)
  res.send(usersAll)
  })

})


module.exports = router;