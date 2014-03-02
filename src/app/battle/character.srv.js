angular.module('marvel.app')
    .factory('Character', [ 'BattleApi', function (BattleApi) {
        var Character = function (offset) {
            this.offset = offset;

            this.loaded = false;
            this.id = null;
            this.name = null;
            this.picture = null;

            this.load();
        };

        Character.prototype.load = function () {
            var self = this;

            var onSuccess = function (result) {
                self.loaded = true;

                var data = result.data.results[0];
                self.id = data.id;
                self.name = data.name;

                var thumbnail = data.thumbnail;
                self.picture = thumbnail.path + '.' + thumbnail.extension;
            };
            // TODO: handle the error.
            var onError = function(result) {
            };

            var character = BattleApi.getCharacter(this.offset);
            character.then(onSuccess, onError);
        };

        return Character;
    }])
;