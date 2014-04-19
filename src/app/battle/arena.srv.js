angular.module('marvel.app')
.service('Arena', function (Character, RandomOffset) {

    this.characters = null;

    var self = this;

    this.init = function() {
        this.characters = [];
        this.characters.push(buildCharacter());
        this.characters.push(buildCharacter());
    };

    function buildCharacterFrom(index) {
        var otherIndex = index === 0 ? 1 : 0;
        var otherOffset = self.characters[otherIndex].offset;

        return new Character(RandomOffset.getNewOffset(otherOffset)).loadByOffset();
    }

    function buildCharacter() {
        return new Character(RandomOffset.getOffset()).loadByOffset();
    }

    this.restart = function() {
        this.characters = [];
        this.init();
    };

    this.newRandomCharacter = function(index) {
      this.characters[index] = buildCharacterFrom(index);
    };

    this.keepCharacter = function(index) {
        var characterIndexToChange = index === 0 ? 1 : 0;
        this.characters[characterIndexToChange] = buildCharacterFrom(index);
    };

    this.changeCharacter = function(index, characterId) {
        this.characters[index] = new Character(characterId).loadById();
    };

    this.getArena = function () {
        return this;
    };

    this.init();

})
;