angular.module('marvel.comics', [ 'ngRoute' ])
    .config([ '$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/comics', {
                controller: 'ComicsCtrl',
                templateUrl: 'app/comics/comics.html'
            });
    }])
;