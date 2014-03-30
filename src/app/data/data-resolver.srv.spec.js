describe('service: DataResolver', function () {

    beforeEach(module('marvel.app'));

    var $location;

    beforeEach(inject(function ($injector) {
        $location = $injector.get('$location');
    }));

    it('should get metadata', inject(function (DataResolver) {
        $location.search('p', 10);

        var metadata = DataResolver.getMetadata('title', 'prop');

        expect(metadata).toEqual({
            title: 'title',
            propertyDescription: 'prop',
            page: 10
        });
    }));

    it('should get metadata with default page to 1 when undefined', inject(function (MarvelRestangular, DataResolver) {
        var metadata = DataResolver.getMetadata('title', 'prop');

        expect(metadata).toEqual({
            title: 'title',
            propertyDescription: 'prop',
            page: 1
        });
    }));

    it('should get page size', inject(function (DataResolver) {
        expect(DataResolver.getPageSize()).toBe(18);
    }));

    it('should get offset', inject(function (DataResolver) {
        expect(DataResolver.getOffset()).toBe(0);

        $location.search('p', 11);
        expect(DataResolver.getOffset()).toBe(180);
    }));

});