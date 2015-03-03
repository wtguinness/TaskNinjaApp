'use strict';

app.controller('AuthController', ['$scope', '$location', 'Auth', function ($scope, $location, Auth) {
    $scope.register = function (user) {
        Auth.register(user).then(function () {
            console.log("Registered successfully!");
            $location.path('/');
        }, function (err) {
            console.log("Error...");
        });
    };

    $scope.login = function (user) {
      Auth.login(user).then(function () {
        console.log("Logged in Successfully!");
          $location.path('/');
      }, function (err) {
        console.log("Error...");
      });
    };
     
    $scope.changePassword = function (user) {
      Auth.changePassword(user)
      .then(function () {
        // Reset Form
          $scope.user.email = "";
          $scope.user.oldPass = "";
          $scope.user.newPass = "";
        
          console.log("Password changed Successfully!");
      }, function (err) {
        console.log("Error...");
      });
      };
    
}]);