angular.module('marvel.app')
.controller('DataCtrl', function ($scope, $location, metadata, data) {
    $scope.metadata = metadata;
    $scope.result = data;

    $scope.changePage = function(page) {
      $location.search('p', page);
    };

});
