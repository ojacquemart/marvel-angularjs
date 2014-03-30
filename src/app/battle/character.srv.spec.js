describe('factory: Character', function () {

    beforeEach(module('marvel.app'));

    beforeEach(inject(function () {
    }));

    describe('On initialization', function () {
        it('should load the character data', inject(function ($rootScope, $q, Character, BattleApi) {

            function getSuccessfulPromise() {
                var defer = $q.defer();

                defer.resolve({
                   data: {
                       results: [
                           {
                               id: 100,
                               name: 'foo',
                               thumbnail: {
                                   path: 'http://foo',
                                   extension: 'jpg'
                               }
                           }
                       ]
                   }
                });

                return defer.promise;
            }

            spyOn(BattleApi, 'findCharacterByOffset').andReturn(getSuccessfulPromise());

            var character = new Character(0);
            character.loadByOffset();

            $rootScope.$apply();

            expect(character.offset).toBe(0);
            expect(character.loaded).toBe(true);
            expect(character.id).toBe(100);
            expect(character.name).toBe('foo');
            expect(character.picture).toBe('http://foo.jpg');
        }));
    });


});