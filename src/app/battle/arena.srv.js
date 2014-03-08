angular.module('marvel.app')
    .service('Arena', [ 'Character', 'RandomOffset', function (Character, RandomOffset) {

        function getNewCharacter() {
            return new Character(RandomOffset.getOffset());
        }

        var Arena = function () {
            this.characters = [];

            this.init();
        };
        Arena.prototype.init = function() {
            this.characters.push(getNewCharacter());
            this.characters.push(getNewCharacter());
        };
        Arena.prototype.restart = function() {
            this.characters = [];
            this.init();
        };
        Arena.prototype.newRandomCharacter = function(index) {
          this.characters[index] = getNewCharacter();
        };
        Arena.prototype.keepCharacter = function(index) {
            var characterIndexToChange = index == 0 ? 1 : 0;
            this.characters[characterIndexToChange] = getNewCharacter();
        };

        this.getArena = function () {
            return new Arena();
        };
    }])
;