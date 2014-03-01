angular.module('marvel.common')
    .factory('MarvelRestangular', [ 'MarvelConfig', 'Restangular', function (MarvelConfig, Restangular) {
        return Restangular.withConfig(function (RestangularConfigurer) {
            RestangularConfigurer.setBaseUrl(MarvelConfig.URL);

            var timestamp = Date.now();
            var hash = md5(timestamp + MarvelConfig.PRIVATE_KEY + MarvelConfig.PUBLIC_KEY);
            RestangularConfigurer.setDefaultRequestParams('get', {
                ts: timestamp,
                apikey: MarvelConfig.PUBLIC_KEY,
                hash: hash
            });
        });
    }]);