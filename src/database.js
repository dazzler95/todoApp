'use strict';

var mongoose = require('mongoose');

//
mongoose.connect('mongodb://localhost/mean-todo', function(err) {


  if (err) {
    console.log('connection failed...');
  } else {
    console.log('connection established..');
  }
});
