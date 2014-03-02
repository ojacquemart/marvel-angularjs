angular.module('marvel.app')
    .service('BattleApi', [ 'MarvelRestangular', function(MarvelRestangular) {
        /**
         * Gets a character by its offset, from 0 to 1401.
         */
        this.getCharacter = function(offset) {
            return MarvelRestangular.one('characters').get({
                limit: 1,
                offset: offset
            });
        };
    }])
;