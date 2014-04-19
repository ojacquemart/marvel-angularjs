angular.module('marvel.common')
.directive('mvFooter', function() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/common/footer/footer.html'
    };
})
;