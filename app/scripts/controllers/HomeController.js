'use strict';

angular.module('copygrinderHome').controller('HomeCtlr', function TodoCtrl($scope) {

}).config(function ($stateProvider) {
  $stateProvider.state('home', {
    url: '/',
    templateUrl: 'views/home.html',
    controller: 'HomeCtlr'
  });
});
