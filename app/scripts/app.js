'use strict';

angular.module('copygrinderHome', [
  'ngResource',
  'ui.router',
  'mm.foundation.accordion',
  'mm.foundation.dropdownToggle',
  'template/accordion/accordion-group.html',
  'template/accordion/accordion.html'
]);

angular.module('copygrinderHome').config(function($locationProvider) {
  $locationProvider.html5Mode(true);
});
