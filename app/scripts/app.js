'use strict';

angular.module('copygrinderHome', [
  'ngResource',
  'ui.router',
  'foundation'
]);

angular.module('copygrinderHome').config(function($locationProvider) {
  $locationProvider.html5Mode(true);
});
