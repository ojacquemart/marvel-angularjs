angular.module('marvel.app')
.service('BattleApi', function (MarvelRestangular) {

    this.findCharacterByOffset = function (offset) {
        return MarvelRestangular.one('characters').get({
            limit: 1,
            offset: offset
        });
    };

    this.findCharacterById = function(id) {
        return MarvelRestangular.one('characters', id).get();
    };

    this.findByNameStartingWith = function (name) {
        return MarvelRestangular.one('characters').get({
            nameStartsWith: name
        });
    };
})
;