angular.module('marvel.app')
.controller('DataCtrl', function ($scope, $location, DataConstants, metadata, data, hotkeys) {
    // Metadata:
    $scope.metadata = metadata;
    $scope.result = data;

    $scope.changePage = function (page) {
        var nbPages = Math.ceil($scope.result.data.total / DataConstants.PAGE_SIZE);
        var pageToGo = Math.min(Math.max(page, 1), nbPages);

        $location.search('p', pageToGo);
    };

    hotkeys.add({
        combo: 'left',
        callback: function () {
            $scope.changePage($scope.metadata.page - 1);
        }
    });

    hotkeys.add({
        combo: 'right',
        callback: function () {
            $scope.changePage($scope.metadata.page + 1);
        }
    });

});
