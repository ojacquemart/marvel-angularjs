angular.module('marvel.app', [
        'ngRoute',
        'restangular',
        'marvel.config',
        'marvel.common'
    ])
    .config([ '$routeProvider', 'MarvelConfig', 'RestangularProvider', function ($routeProvider, MarvelConfig, RestangularProvider) {
        function setRoutes() {
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
        };

        function setRestangularDefaultConfig() {
            RestangularProvider.setBaseUrl(MarvelConfig.URL);

            var timestamp = Date.now();
            var hash = md5(timestamp + MarvelConfig.PRIVATE_KEY + MarvelConfig.PUBLIC_KEY);
            RestangularProvider.setDefaultRequestParams('get', {
                ts: timestamp,
                apikey: MarvelConfig.PUBLIC_KEY,
                hash: hash
            });
        };

        setRoutes();
        setRestangularDefaultConfig();
    }])
    .run(['$rootScope', '$location', function ($rootScope, $location) {
    }])
;
