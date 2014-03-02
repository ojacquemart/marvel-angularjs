angular.module('marvel.app')
    .service('Arena', [ 'Character', 'RandomOffset', function (Character, RandomOffset) {

        function getNewPlayer() {
            return new Character(RandomOffset.getOffset());
        }

        var Arena = function () {
            this.characters = [];

            this.init();
        };
        Arena.prototype.init = function() {
            this.characters.push(getNewPlayer());
            this.characters.push(getNewPlayer());
        };
        Arena.prototype.restart = function() {
            this.characters = [];
            this.init();
        };
        Arena.prototype.keepCharacter = function(index) {
            var characterIndexToChange = index == 0 ? 1 : 0;
            this.characters[characterIndexToChange] = getNewPlayer();
        };

        this.getArena = function () {
            return new Arena();
        };
    }])
;