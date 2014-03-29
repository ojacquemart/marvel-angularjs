angular.module('marvel.app')
.constant('OffsetsBounds', {
    MIN: 0,
    MAX: 1401
})
.service('RandomOffset', function (OffsetsBounds) {

    this.getOffset = function () {
        return Math.floor(Math.random() * (OffsetsBounds.MAX - OffsetsBounds.MIN + 1)) + OffsetsBounds.MIN;
    };

    this.getNewOffset = function (currentOffset) {
        var newOffset = this.getOffset();
        while (newOffset === currentOffset) {
            newOffset = this.getOffset();
        }

        return newOffset;
    };
})
;