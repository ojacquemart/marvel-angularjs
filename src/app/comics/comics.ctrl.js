angular.module('marvel.app')
.controller('ComicsCtrl', function ($scope, Restangular) {
    $scope.result = null;
    Restangular.one('comics').get().then(function(result) {
        $scope.result = result;
    });
})
;

