'use strict';

var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();

var User = require('../model/usermodel');



router.post('/register', function(req, res, next) {
  console.log('req.body', req.body)

    var description= req.body.uid
    var date = req.body.date
   
 User.save({description: description, date: date},  function(err, newUser) {
   if(err) return res.status(400).send(err);
      res.send();
    });
});


router.get('/all',  function(req, res, next){
console.log("INNNN")
  User.find({}, function(err, usersAll){
    console.log('all users', usersAll)
  res.send(usersAll)
  })

})


module.exports = router;