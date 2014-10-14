var app = angular.module("app", []);


app.controller("HeaderHolderController", ["$http", function($http) {
  var todoList = this;

  

  $http.get("/app/todo.json").success(function(data) {
    todoList.headers = data;
  });

  


}]);


// var items = [{ title: "lol", description: "dude", todo: ["1","2","3"]}];














