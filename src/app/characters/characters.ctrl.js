angular.module('marvel.app')
   .controller('CharactersCtrl', [ '$scope', 'Restangular', function ($scope, Restangular) {
        $scope.result = null;
        Restangular.one('characters').get().then(function(result) {
            $scope.result = result;
        });
   }]);
