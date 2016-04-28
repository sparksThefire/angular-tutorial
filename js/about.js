(function() {
  var app = angular.module('myApp');

  app.directive('about', function(){
    return {
      restrict: 'E',
      templateUrl: 'template/about.html'
    };
  });

  app.controller('aboutCtrl', function() {
    var ac = this;
  });
})();
