(function() {
  var app = angular.module('myApp');

  app.factory('PageService', function($location) {

    var PageService = {};
    PageService.pages = ["Home", "About"];

    PageService.isSelected = function(page) {
       return page === $location.path();
   };
   PageService.homePage = function() {
     return PageService.pages[0];
   };

   return PageService;
  });
})();
