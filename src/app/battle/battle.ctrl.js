angular.module('marvel.app')
.controller('BattleCtrl', function ($scope, Arena) {

    $scope.arena = Arena.getArena();

})
;
