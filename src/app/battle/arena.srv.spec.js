describe('service: Arena', function () {

    beforeEach(module('marvel.app'));

    beforeEach(inject(function () {
    }));

    describe('On initialization', function () {
        it('should init two characters', inject(function (Arena) {
            var arena = Arena.getArena();

            expect(arena.characters).not.toBeNull();
            expect(arena.characters.length).toBe(2);
        }));
    });

    describe('On restart', function () {
        it('should create two new characters', inject(function (Arena) {
            var arena = Arena.getArena();
            arena.restart();

            expect(arena.characters).not.toBeNull();
            expect(arena.characters.length).toBe(2);
        }));

        it('should create two new characters with different offsets', inject(function (Arena) {

            function mapCharactersToOffsets(characters) {
                return _.map(characters, function (c) {
                    return c.offset;
                });
            }

            var arena = Arena.getArena();
            var oldCharactersOffsets = mapCharactersToOffsets(arena.characters);

            arena.restart();
            var newCharactersOffsets = mapCharactersToOffsets(arena.characters);

            expect(newCharactersOffsets).not.toEqual(oldCharactersOffsets);

        }));
    });

    describe('On keeping', function () {

        var arena;

        beforeEach(inject(function (Arena) {
            arena = Arena.getArena();
        }));

        it('should not change the character to keep', inject(function () {
            var character1 = arena.characters[0];
            arena.keepCharacter(0);

            expect(character1).toEqual(arena.characters[0]);
        }));

        it('should change the other character', inject(function () {
            var character2 = arena.characters[0];
            arena.keepCharacter(0);

            expect(character2).not.toEqual(arena.characters[1]);
        }));
    });

});