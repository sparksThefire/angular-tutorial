(function() {
  var app = angular.module('myApp');

  app.directive('headerDir', function($location, $injector) {
    var pageSer = $injector.get('PageService');
    // Autoselect the first item in the pages menu
    $location.path(pageSer.pages[0]);
    return {
      restrict: 'E',
      templateUrl: 'template/default/header.html'
    };
  });

  app.controller('headerCtrl', function($scope, $location, $injector) {
    var hea = this;
    var pageSer = $injector.get('PageService');
    hea.pageList = pageSer.pages;

    $scope.homePage = function() {
      return pageSer.homePage();
    };

     $scope.isSelected = function(page) {
        return pageSer.isSelected(page);
    };
  });

})();
