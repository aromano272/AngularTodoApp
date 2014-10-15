var app = angular.module("app", []);


app.controller("HeaderHolderController", ["$scope", "$http", function($scope, $http) {
  var todoList = this;

  $http.get("/app/todo.json").success(function(data) {
    todoList.headers = data;
  });

    


}]);

app.controller("NewItemController", ["$scope", "$http", function($scope, $http) {

  $scope.newTasks = [{"item": "item 0"}, {"item": "item 1"}];

  $scope.save = function() {
    header = $scope.header;
    description = $scope.description;
    tasks = $scope.newTasks;

    console.log(header + description + tasks);

    // create new obj
    var newItem = {};
    // push values to that obj
    newItem.headerTitle = header;
    newItem.description = description;
    newItem.tasks = tasks;
    // push object to json file
    $http.post("/newtask.json", JSON.stringify(newItem));
  }

  $(document).on("keydown", ".item-holder__new-tasks input:last-child", function() {
    $scope.newTasks.push({"item": "item " + $scope.newTasks.length });
    $scope.$apply();
  });


}]);















app.directive("addNewItem", function() {
  return {
    restrict: "E",
    templateUrl: "new-item.html"
  };
});















