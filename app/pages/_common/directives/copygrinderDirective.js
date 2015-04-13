'use strict';

(function () {

  var buildQueryDirective = function (name, dataFunc) {

    angular.module('copygrinderHome').directive(name, ['copygrinderService', function (copygrinderService) {

      var cgDirective = {};

      cgDirective.restrict = 'AE';

      cgDirective.link = function ($scope, $element, $attr) {
        var cgQuery = $attr[name];
        if (cgQuery) {
          var match = cgQuery.match(/^\s*(.+)\s+as\s+(.+)\s*$/);
          if (match) {
            var query = match[1];
            var scopeVar = match[2];
            copygrinderService.query(query, function (data) {
              $scope[scopeVar] = dataFunc(data);
            });
          }
        }
      };

      return cgDirective;
    }]);
  };

  buildQueryDirective('cgQuery', function (data) {
    return data;
  });

  buildQueryDirective('cgSingletonQuery', function (data) {
    return data[0].content;
  });

  angular.module('copygrinderHome').filter('sanitize', ['$sce', function ($sce) {
    return function (htmlCode) {
      return $sce.trustAsHtml(htmlCode);
    };
  }]);

})();
