angular.module('marvel.common')
    .directive('navbar', [ function() {
      return {
          restrict: 'E',
          replace: true,
          templateUrl: 'app/common/navbar/navbar.html'
      }
    }])
;