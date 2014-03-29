angular.module('marvel.app')
.factory('Character', function (BattleApi) {
    var Character = function (offset) {
        this.offset = offset;

        this.loaded = false;
        this.id = null;
        this.name = null;
        this.picture = null;
    };

    Character.prototype.loadByOffset = function() {
        this.load(BattleApi.findCharacterByOffset(this.offset));

        return this;
    };

    Character.prototype.loadById = function() {
        this.load(BattleApi.findCharacterById(this.offset));

        return this;
    };

    Character.prototype.load = function (promise) {
        this.loaded = false;

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

        promise.then(onSuccess, onError);
    };

    return Character;
})
;