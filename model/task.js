'use strict';

var mongoose = require('mongoose');

var tasksSchema = new mongoose.Schema({
  description: {type:String},
  date: {type:String}
});

var User = mongoose.model('Tasks', taskSchema);
