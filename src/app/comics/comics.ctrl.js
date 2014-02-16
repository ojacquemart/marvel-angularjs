angular.module('marvel.comics')
    .controller('ComicsCtrl', [ '$scope', 'Restangular', function ($scope, Restangular) {
        $scope.result = null;
        Restangular.one('comics').get().then(function(result) {
            $scope.result = result;
        });
    }])
;

