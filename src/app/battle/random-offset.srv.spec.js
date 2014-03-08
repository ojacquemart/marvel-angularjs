describe('service: RandomOffset', function () {

    beforeEach(module('marvel.app'));

    it('should define offsets bounds', inject(function (OffsetsBounds) {
        expect(OffsetsBounds.MIN).toBe(0);
        expect(OffsetsBounds.MAX).toBe(1401);
    }));

    it('should get random offset', inject(function (RandomOffset) {
        function assertOffset() {
            var offset = RandomOffset.getOffset();
            expect(offset).toBeGreaterThan(-1);
            expect(offset).toBeLessThan(1402);
        }

        for (var i = 0; i < 10; i++) {
            assertOffset();
        }

    }));

    describe('When getting a new fresh offset', function() {

        beforeEach(module(function ($provide) {
            // Redefine offsets bound to test the different offsets generation.
            $provide.constant('OffsetsBounds', {
                MIN: 0,
                MAX: 1
            });
        }));

        it('should give a new fresh offset', inject(function(RandomOffset) {
            expect(RandomOffset.getNewOffset(0)).toBe(1);
            expect(RandomOffset.getNewOffset(1)).toBe(0);
        }));
    });

});