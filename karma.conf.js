// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html

module.exports = function (config) {
    config.set({
        // base path, that will be used to resolve files and exclude
        basePath: '',

        // testing framework to use (jasmine/mocha/qunit/...)
        frameworks: ['jasmine'],

        // list of files / patterns to load in the browser
        files: [
            'src/bower_components/angular/angular.js',
            'src/bower_components/angular-route/angular-route.js',
            'src/bower_components/angular-mocks/angular-mocks.js',
            'src/bower_components/angular-bootstrap/ui-bootstrap.js',
            'src/bower_components/underscore/underscore.js',
            'src/bower_components/angular-hotkeys/build/hotkeys.js',
            'src/bower_components/restangular/dist/restangular.js',
            'src/bower_components/js-md5/js/md5.js',
            'src/app/*.js',
            'src/app/**/*.mdl.js',
            'src/app/**/*.js'
        ],

        // list of files / patterns to exclude
        exclude: [],

        preprocessors: {
            'src/app/**/!(*spec).js': [ 'coverage' ]
        },

        coverageReporter: {
            type: 'lcov',
            dir: 'coverage/'
        },

        // possible values: dots || progress
        reporters: ['progress', 'coverage' ],

        // web server port
        port: 8081,

        // level of logging
        // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,

        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        browsers: ['Chrome'],

        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: false
    });
};
