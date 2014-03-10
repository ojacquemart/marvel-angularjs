describe('service: BattleApi', function() {

    beforeEach(module('marvel.common'));
    beforeEach(module('marvel.app'));

    describe('When asking for a character', function() {
        it('should call the MarvelRestangular provider', inject(function(MarvelRestangular, BattleApi) {
            spyOn(MarvelRestangular, 'one').andCallThrough();

            BattleApi.findCharacterByOffset(0);

            expect(MarvelRestangular.one).toHaveBeenCalledWith('characters');
        }));
    })
})
;