angular.module('marvel.common')
.directive('loader', function () {
    return {
        restrict: 'A',
        link: function ($scope, element) {
            $scope.$on('loader_show', function () {
                element.css('display', 'block');
            });
            $scope.$on('loader_hide', function () {
                element.css('display', 'none');
            });
        }
    };
});