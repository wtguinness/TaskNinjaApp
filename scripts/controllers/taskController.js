'use strict';
app.controller('TaskController', ['$scope', 'FURL', '$firebase', '$location', '$routeParams', 'toaster', function ($scope, FURL, $firebase, $location, $routeParams, toaster) {
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
        toaster.pop('success', 'Task is POSTED!');
        $location.path('/browse');
    }

    function getTask(taskId) {
        return $firebase(ref.child('tasks').child(taskId)).$asObject();
    }

    $scope.updateTask = function (task) {
        $scope.selectedTask.$save(task);
        toaster.pop('success', 'Task is UPDATED!');
        $location.path('/browse');
    }

}]);