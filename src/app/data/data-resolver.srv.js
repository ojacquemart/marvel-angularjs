angular.module('marvel.app')
.service('DataResolver', function($location, MarvelRestangular) {
    var PAGE_SIZE = 18;

    function getPage() {
        return $location.search()['p'] || 1;
    }

    this.getMetadata = function(title, propertyDescription) {
        return {
            title: title,
            propertyDescription: propertyDescription,
            page: getPage()
        };
    };

    this.getData = function(resource) {
        var self = this;

        return MarvelRestangular.one(resource)
            .get({
                limit: self.getPageSize(),
                offset: self.getOffset()
            });
    };

    this.getPageSize = function() {
        return PAGE_SIZE;
    };

    this.getOffset = function() {
        var page = getPage() - 1;

        return PAGE_SIZE * page;
    };
})
;