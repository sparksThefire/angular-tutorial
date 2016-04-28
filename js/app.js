(function(){
  var app = angular.module('myApp', []);

  app.controller('pageCtrl', function($scope, $location, $injector) {
    var pageService = $injector.get('PageService');
    
    $scope.isSelected = function(page) {
       return pageService.isSelected(page);
   };
  });
})();
