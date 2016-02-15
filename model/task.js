'use strict';

var mongoose = require('mongoose');

var taskSchema = new mongoose.Schema({
  description: {type:String},
  date: {type:String}
});