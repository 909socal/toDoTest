'use strict';

var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  description: {type:String},
  date: {type:String}
});

var User = mongoose.model('User', userSchema);
