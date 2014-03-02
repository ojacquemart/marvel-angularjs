angular.module('marvel.common')
    .directive('mvCharacter', [ function() {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'app/battle/character.html'
        }
    }])
;