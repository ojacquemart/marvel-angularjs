angular.module('marvel.characters', [ 'ngRoute', 'restangular' ])
   .config([ '$routeProvider', function ($routeProvider) {
      $routeProvider
         .when('/characters', {
              controller: 'CharactersCtrl',
              templateUrl: 'app/characters/characters.html'
         });
   }])
;