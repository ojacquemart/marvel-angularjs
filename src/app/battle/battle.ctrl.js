angular.module('marvel.app')
   .controller('BattleCtrl', [ '$scope', 'Arena', function ($scope, Arena) {

        $scope.arena = Arena.getArena();

   }])
;
