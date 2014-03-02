angular.module('marvel.app')
    .constant('OffsetsBounds', {
        MIN: 0,
        MAX: 1401
    })
    .service('RandomOffset', [ 'OffsetsBounds', function (OffsetsBounds) {
        this.getOffset = function () {
            return Math.floor(Math.random() * (OffsetsBounds.MAX - OffsetsBounds.MIN + 1)) + OffsetsBounds.MIN;
        };
    }])
;