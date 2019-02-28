'use strict';

var mongoose = require('mongoose');


// our string should have a name prop and if it is completed or not
//todo.name and todo.completed..
//object with key-value pair
var todoSchema = new mongoose.Schema({
	name: String,
	completed: Boolean
});

var model = mongoose.model('Todo', todoSchema);

module.exports = model;
