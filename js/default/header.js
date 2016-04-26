(function() {
  var app = angular.module('myApp');

  var pages = ["Home", "Page1", "Page2"];

  var currentItem = pages[0];

  app.directive('headerDir', function() {
    return {
      restrict: 'E',
      templateUrl: 'template/default/header.html'
    };
  });

  app.controller('headerCtrl', function($scope, $location) {
    var hea = this;
    hea.pageList = pages;

     $scope.isSelected = function(page) {
        return page === $location.path();
    };
  });

})();
