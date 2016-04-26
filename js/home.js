(function() {
  var app = angular.module('myApp');

  app.directive('homeDir', function() {
    return {
      restrict: 'E',
      templateUrl: 'template/home.html'
    };
  });
  app.controller('homeCtrl', function() {
    var home = this;
    home.label = "GREETINGS WOOOOORLD! GET SHWIFTY!!!!";
  });

})();
