'use strict';
app.controller('TaskController', ['$scope', 'FURL', '$firebase', '$location', '$routeParams', function ($scope, FURL, $firebase, $location, $routeParams) {
    var ref = new Firebase(FURL);
    var fbTasks = $firebase(ref.child('tasks')).$asArray();
    var taskId = $routeParams.taskId;

    fbTasks.$loaded().then(function (data) {
        $scope.tasks = fbTasks;

    console.log("Length = " + fbTasks.length);
    })



    if (taskId) {
        $scope.selectedTask = getTask(taskId);
    }


    $scope.postTask = function (task) {
        fbTasks.$add(task);
        $location.path('/browse');
    }

    function getTask(taskId) {
        return $firebase(ref.child('tasks').child(taskId)).$asObject();
    }

    $scope.updateTask = function (task) {
        $scope.selectedTask.$save(task);
        $location.path('/browse');
    }

}]);
