angular.module('marvel.common')
.directive('mvNavbar', function() {
  return {
      restrict: 'E',
      replace: true,
      templateUrl: 'app/common/navbar/navbar.html'
  };
})
;