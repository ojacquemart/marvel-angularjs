describe('controller: DataCtrl', function () {

    beforeEach(module('marvel.app'));

    var $scope;
    var $location;
    var createController;
    var expectedMetadata, expectedData;

    beforeEach(inject(function ($injector) {
        $location = $injector.get('$location');

        var $rootScope = $injector.get('$rootScope');
        $scope = $rootScope.$new();

        var $controller = $injector.get('$controller');

        expectedMetadata = { title: 'foo', propertyDescription: 'bar' };
        expectedData = { data: [ { name: 'foo' } ] };
        createController = function() {
            return $controller('DataCtrl', {
                '$scope': $scope,
                '$location': $injector.get('$location'),
                'metadata': expectedMetadata,
                'data': expectedData
            });
        };
    }));

    it('should store the marvel data', inject(function () {
        createController();

        expect($scope.metadata).toEqual(expectedMetadata);
        expect($scope.result).toEqual(expectedData);
    }));

    it('should change the $location', inject(function () {
        createController();

        $scope.changePage(10);

        expect($location.search()['p']).toBe(10);
    }));

});