(function() {
  var app = angular.module('myApp');

  app.directive('marketingDir', function() {
    return {
      restrict: 'E',
      templateUrl: 'template/marketing.html'
    }
  });

  app.controller('marketingCtrl', function() {
    var m = this;
  });
})();
