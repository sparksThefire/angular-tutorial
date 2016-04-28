(function() {
  var app = angular.module('myApp');

  app.directive('sidebarDir', function(){
    return {
      restrict: 'E',
      templateUrl: 'template/default/sidebar.html'
    };
  });

  app.controller('sidebarCtrl', function() {

  });
})();
