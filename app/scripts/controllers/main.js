'use strict';

function MainCtrl ($scope, dataService) {
//whenevr maincrtl is loaded the data services gets ours todos and attaches todos with scope todos variable
  dataService.getTodos(function(response){
    var todos = response.data.todos;
    $scope.todos =  todos;
  });

//creates a new todo and adds it todos in angular scope
  $scope.addTodo = function() {
    $scope.todos.unshift({name: "This is a new todo.",
                      completed: false});
  };

}

module.exports = MainCtrl;
