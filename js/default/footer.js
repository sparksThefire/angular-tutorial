(function() {
  var app = angular.module('myApp');

  app.directive('footerDir', function() {
    return {
      restrict: 'E',
      templateUrl: 'template/default/footer.html'
    };
  });

})();
