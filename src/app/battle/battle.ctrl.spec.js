describe('controller: BattleCtrl', function () {

    beforeEach(module('marvel.app'));

    var $scope;

    beforeEach(inject(function ($injector) {
        var $rootScope = $injector.get('$rootScope');
        $scope = $rootScope.$new();

        var $controller = $injector.get('$controller');

        createController = function() {
            return $controller('BattleCtrl', {
                '$scope': $scope,
                'Arena': $injector.get('Arena')
            });
        };
    }));

    it('should store the arena', inject(function () {
        createController();

        expect($scope.arena).toBeDefined();
    }));

});