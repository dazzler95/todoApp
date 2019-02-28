'use strict';

var Todo = require('./models/todo');
//some fake data
var todos = [
	'some random texts',
	'abcdefgh',
	'xyz'
];
//iterate through array..for each element ijn array..find a todo with the name equals OUR todo string
todos.forEach(function (todo, index) {
  Todo.find({ 'name': todo }, function(err, todos) {
//if there is no err and todo doesnt exist then create one
    if (!err && !todos.length) {
      Todo.create({ completed: false, name: todo });
  	}
  });
});
