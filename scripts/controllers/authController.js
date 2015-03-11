'use strict';

app.controller('AuthController', ['$scope', '$location', 'Auth', 'toaster', function ($scope, $location, Auth, toaster) {
    
    if(Auth.signedIn()){
        $location.path('/');
    }
    
    $scope.register = function (user) {
        Auth.register(user).then(function () {
            toaster.pop('success', 'Registered successfully!');
            console.log("Registered successfully!");
            $location.path('/');
        }, function (err) {
            toaster.pop('error', 'There was an ERROR Registering!');
            console.log("Error...");
        });
    };

    $scope.login = function (user) {
        Auth.login(user).then(function () {
            toaster.pop('success', 'LOGGED IN Successfully!');
            console.log("Logged in Successfully!");
            $location.path('/');
        }, function (err) {
            toaster.pop('error', 'There was an ERROR Logging in!');
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
                toaster.pop('success', 'Password CHANGED!');
                console.log("Password changed Successfully!");
            }, function (err) {
                toaster.pop('error', 'There was an ERROR Changing your Password!');
                console.log("Error...");
            });
    };

}]);