'use strict';

angular.module('marvel.app', [
        'ngRoute',
        'restangular',
        'marvel.config',
        'marvel.common',
        'marvel.characters',
        'marvel.comics'
    ])
    .config([ '$routeProvider', 'MarvelConfig', 'RestangularProvider', function ($routeProvider, MarvelConfig, RestangularProvider) {
        function setDefaultRoute() {
            $routeProvider.otherwise({
                redirectTo: '/characters'
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

        setDefaultRoute();
        setRestangularDefaultConfig();
    }])
    .run(['$rootScope', '$location', function ($rootScope, $location) {
    }])
;
