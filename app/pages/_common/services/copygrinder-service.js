'use strict';

angular.module('copygrinderHome').factory('copygrinderService', function ($http) {

  var cgService = {};

  var rootUrl = document.body.getAttribute('data-copygrinder-url');

  cgService.query = function(queryString, callback) {
    $http.get(rootUrl + 'copybeans?' + queryString).success(callback);
  };

  return cgService;
});
