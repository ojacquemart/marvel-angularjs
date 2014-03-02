describe('service: RandomOffset', function () {

    beforeEach(module('marvel.app'));

    beforeEach(inject(function () {
    }));

    it('should define offsets bounds', inject(function (OffsetsBounds) {
        expect(OffsetsBounds.MIN).toBe(0);
        expect(OffsetsBounds.MAX).toBe(1401);
    }));

    it('should define offsets bounds', inject(function (RandomOffset) {
        function assertOffset() {
            var offset = RandomOffset.getOffset();
            expect(offset).toBeGreaterThan(-1);
            expect(offset).toBeLessThan(1402);
        }

        for (var i = 0; i < 10; i++) {
            assertOffset();
        }

    }));


});