'use strict';

angular.module('copygrinderHome').controller('HomeCtlr', function($scope) {

}).config(function ($stateProvider) {
  $stateProvider.state('home', {
    url: '/',
    templateUrl: 'pages/home/home.html',
    controller: 'HomeCtlr'
  });
});
