angular.module('marvel.common')
.controller('CharacterCtrl', function ($scope, Arena, BattleApi) {

    $scope.searchActive = false;

    $scope.toggleSearch = function () {
        $scope.searchActive = !$scope.searchActive;
    };

    $scope.searchCharacter = function (value) {
        return BattleApi.findByNameStartingWith(value)
            .then(function (result) {
                return result.data.results;
            });
    };

    $scope.onSelectCharacter = function ($item, $model, $label) {
        var arena = Arena.getArena();

        var index=  $scope.$index;
        var charaterId = $item.id;
        arena.changeCharacter(index, charaterId);

        $scope.searchActive = false;
    };
})
.directive('mvCharacter', function () {
    return {
        restrict: 'E',
        replace: true,
        controller: 'CharacterCtrl',
        templateUrl: 'app/battle/character.html'
    };
})
;