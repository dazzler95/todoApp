'use strict';

var express = require('express');
var Todo = require('../models/todo');

var router = express.Router();

router.get('/todos', function(req, res) {
  //first way to interact with db is by using model find method
//first param ..passing an empty objects..second param is a call back
//func which takes 2 params , an err and todos
  Todo.find({}, function(err, todos) {
    if (err) {
      //status 500 IS GENERIC service error..an internal server error
      return res.status(500).json({ message: err.message });
    }
    res.json({ todos: todos });
  });
});
//to send or post data to the server
router.post('/todos', function(req, res) {
  var todo = req.body; //body of req will be data for todo

//storing // TODO:  in DB using create meth..first param is todo were saving ..2nd is err
  Todo.create(todo, function(err, todo) {
    if (err) {
      return res.status(500).json({ err: err.message });
    }
    res.json({ 'todo': todo, message: 'Todo Created' });
  });
});


//put meth is similar to post..but how we handle req is what differs..
//id key of param object is stored in "var id"
router.put('/todos/:id', function(req, res) {
  var id = req.params.id;
  var todo = req.body;
  if (todo && todo._id !== id) {
    return res.status(500).json({ err: "Ids don't match!" });
  }

  //frist param here is id from the route...2nd param is new data we're sending to mongoDb..3rd is err
  Todo.findByIdAndUpdate(id, todo, {new: true}, function(err, todo) {
    if (err) {
      return res.status(500).json({ err: err.message });
    }
    res.json({ 'todo': todo, message: 'Todo Updated' });
  });
});

router.delete('/todos/:id', function(req, res) {
  var id = req.params.id;
  Todo.findByIdAndRemove(id, function(err, result) {
    if (err) {
      return res.status(500).json({ err: err.message });
    }
    res.json({ message: 'Todo Deleted' });
  });
});

module.exports = router;
