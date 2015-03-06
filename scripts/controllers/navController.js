app.controller('NavController', ['$scope', '$location', 'Auth', 'toaster', function ($scope, $location, Auth, toaster) {    
    $scope.currentUser = Auth.user;
    $scope.signedIn = Auth.signedIn;
    
    $scope.logout = function () {
      Auth.logout();
        toaster.pop('success', 'You have LOGGED OUT!');
        console.log("Logged out!");
        $location.path('/');
    }
}]);