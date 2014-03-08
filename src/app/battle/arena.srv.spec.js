describe('service: Arena', function () {

    var arena;

    beforeEach(module('marvel.app'));

    beforeEach(inject(function (Arena) {
        arena = Arena.getArena();
    }));

    describe('On initialization', function () {
        it('should init two characters', inject(function () {
            expect(arena.characters).not.toBeNull();
            expect(arena.characters.length).toBe(2);
        }));
    });

    describe('On restart', function () {
        it('should create two new characters', inject(function () {
            arena.restart();

            expect(arena.characters).not.toBeNull();
            expect(arena.characters.length).toBe(2);
        }));

        it('should create two new characters with different offsets', inject(function () {

            function mapCharactersToOffsets(characters) {
                return _.map(characters, function (c) {
                    return c.offset;
                });
            }

            var oldCharactersOffsets = mapCharactersToOffsets(arena.characters);

            arena.restart();
            var newCharactersOffsets = mapCharactersToOffsets(arena.characters);

            expect(newCharactersOffsets).not.toEqual(oldCharactersOffsets);

        }));
    });

    describe('On new random character', function() {

        it('should randomize the character at a given index', function() {
            var oldCharacter1 = arena.characters[0];

            arena.newRandomCharacter(0);

            var newCharacter1 = arena.characters[0];
            expect(newCharacter1.offset).not.toBe(oldCharacter1.offset);
        });
    });

    describe('On keeping', function () {

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