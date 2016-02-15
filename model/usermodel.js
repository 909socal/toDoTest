'use strict';

var mongoose = require('mongoose');

var User;

var userSchema = new mongoose.Schema({
  description: {type:String},
  date: {type:String}

});

User = mongoose.model('User', userSchema);

module.exports = User;