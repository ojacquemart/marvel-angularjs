angular.module('marvel.common')
.factory('MarvelRestangular', function (MarvelConfig, Restangular) {
    return Restangular.withConfig(function (RestangularConfigurer) {
        RestangularConfigurer.setBaseUrl(MarvelConfig.URL);

        var timestamp = Date.now();
        var hash = md5(timestamp + MarvelConfig.PRIVATE_KEY + MarvelConfig.PUBLIC_KEY);
        RestangularConfigurer.setDefaultHttpFields({ cache: true });
        RestangularConfigurer.setDefaultRequestParams('get', {
            ts: timestamp,
            apikey: MarvelConfig.PUBLIC_KEY,
            hash: hash
        });
    });
});