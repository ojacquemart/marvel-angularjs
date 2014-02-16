angular.module('marvel.characters')
   .controller('CharactersCtrl', [ '$scope', 'Restangular', function ($scope, Restangular) {
        $scope.result = null;
        Restangular.one('characters').get().then(function(result) {
            $scope.result = result;
        });
   }]);
