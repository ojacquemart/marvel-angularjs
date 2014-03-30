angular.module('marvel.app', [
    'ngRoute',
    'restangular',
    'ui.bootstrap',
    'marvel.config',
    'marvel.common'
])
.config(function ($httpProvider, $routeProvider) {
    $routeProvider
        .when('/battle', {
            controller: 'BattleCtrl',
            templateUrl: 'app/battle/battle.html'
        })
        .when('/characters', {
            controller: 'CharactersCtrl',
            templateUrl: 'app/characters/characters.html'
        })
        .when('/comics', {
            controller: 'ComicsCtrl',
            templateUrl: 'app/comics/comics.html'
        })
        .otherwise({
            redirectTo: '/battle'
        });

    $httpProvider.interceptors.push('httpBroadcaster');
})
.run(function ($rootScope, $location) {
})
;
