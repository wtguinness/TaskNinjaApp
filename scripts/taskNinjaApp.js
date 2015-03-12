'use strict';

var app = angular.module('TaskNinjaApp', ['firebase', 'ngRoute','ngResource','ngAnimate', 'toaster', 'angularMoment'])
    .constant('FURL', 'https://blistering-heat-9707.firebaseio.com/')
    .config(function ($routeProvider){
        $routeProvider
      .when('/', {
           templateUrl: 'views/browse.html',
            controller: 'BrowseController'
       })
//      .when('/post', {
//           templateUrl: 'views/post.html',
//           controller: 'TaskController'
//       })
//      .when('/edit/:taskId', {
//           templateUrl: 'views/edit.html',
//            controller: 'TaskController'
//       })
      .when('/browse/:taskId', {
           templateUrl: 'views/browse.html',
            controller: 'BrowseController'
       })      
        .when('/register', {
           templateUrl: 'views/register.html',
            controller: 'AuthController'
       })
        .when('/login', {
           templateUrl: 'views/login.html',
            controller: 'AuthController'

       })
       .otherwise({
           redirect: '/'
       });

    });

