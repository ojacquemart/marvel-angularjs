// Generated on 2013-10-21 using generator-angular 0.4.0
'use strict';
var LIVERELOAD_PORT = 35729;
var lrSnippet = require('connect-livereload')({ port: LIVERELOAD_PORT });
var mountFolder = function (connect, dir) {
   return connect.static(require('path').resolve(dir));
};

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {
   require('load-grunt-tasks')(grunt);
   require('time-grunt')(grunt);

   grunt.loadNpmTasks('grunt-ng-constant');
   grunt.loadNpmTasks('grunt-angular-templates');

   // configurable paths
   var yeomanConfig = {
      module: 'marvel.app',
      src: 'src',
      app: 'app',
      dist: 'dist',
      assets: {
         'css': 'assets/css',
         'img': 'assets/img',
         'fonts': 'assets/fonts',
         'locale': 'assets/locale'
      },
      ngTemplatesFile: '.tmp/templates/templates.js',
      bowerComponent: 'bower_components'
   };

   try {
      yeomanConfig.app = require('./bower.json').appPath || yeomanConfig.app;
   } catch (e) {
   }

   grunt.registerTask('server', function (target) {
      if (target === 'dist') {
         return grunt.task.run(['build', 'open', 'connect:dist:keepalive']);
      }

      grunt.task.run([
         'clean:server',
         'ngconstant:marvel',
         'concurrent:server',
         'autoprefixer',
         'connect:livereload',
         'open',
         'watch'
      ]);
   });

   grunt.registerTask('test', [ 'clean:server', 'concurrent:test', 'autoprefixer', 'connect:test', 'karma' ]);

   grunt.registerTask('build', [
       'clean:dist',
       'clean:coverage',
       'karma',
       'copy:coverage',
       'ngconstant:marvel',
       'useminPrepare',
       'ngtemplates',
       'concurrent:dist',
       'autoprefixer',
       'concat',
       'copy:dist',
       'ngmin',
       'cssmin',
       'uglify',
       'rev',
       'usemin',
       'clean:distBower'
   ]);

   grunt.registerTask('default', [ 'jshint', 'test', 'build' ]);

   grunt.initConfig({
      yeoman: yeomanConfig,
      /**
       * ngConstant generates AngularJS constants files reading given JSON files.
       * @see config/*.json.
       */
      ngconstant: {
         marvel: {
             options: {
                 dest: '<%= yeoman.src %>/<%= yeoman.app %>/marvel-config.js',
                 name: 'marvel.config'
             },
             constants: {
                 MarvelConfig: grunt.file.readJSON('config/marvel-config.json')
             }
         }
      },
      /**
      * ngTemplates is a Grunt plugin that takes all of your template files and
      * places them into JavaScript files as strings that are added to
      * AngularJS's template cache. This means that the templates too become
      * part of the initial payload as one JavaScript file. Neat!
      */
      ngtemplates: {
         app: {
            options: {
               module: '<%= yeoman.module %>',
               usemin: 'app/app.js'
            },
            cwd: '<%= yeoman.src %>',
            src: '<%= yeoman.app %>/**/*.html',
            dest: '<%= yeoman.ngTemplatesFile %>'
         }
      },
      watch: {
         styles: {
            files: ['<%= yeoman.src %>/<%= yeoman.assets.css %>/{,*/}*.css'],
            tasks: ['copy:styles', 'autoprefixer']
         },
         livereload: {
            options: {
               livereload: LIVERELOAD_PORT
            },
            files: [
               '<%= yeoman.src %>/{,*/}*.html',
               '<%= yeoman.src %>/<%= yeoman.app %>/**/*.html',
               '.tmp/<%= yeoman.assets.css %>/{,*/}*.css',
               '{.tmp,<%= yeoman.src %>}/<%= yeoman.app %>/{,*/}*.js',
               '<%= yeoman.src %>/<%= yeoman.assets.img %>/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
               '<%= yeoman.src %>/<%= yeoman.assets.locale %>/*.json'
            ]
         }
      },
      autoprefixer: {
         options: ['last 1 version'],
         dist: {
            files: [
               {
                  expand: true,
                  cwd: '.tmp/<%= yeoman.assets.css %>/',
                  src: '{,*/}*.css',
                  dest: '.tmp/<%= yeoman.assets.css %>/'
               }
            ]
         }
      },
      /**
       * Connection configuration to detect changes during devlopment and reload your browsers.
       */
      connect: {
         options: {
            port: 9001,
            // Change this to '0.0.0.0' to access the server from outside.
            hostname: 'localhost'
         },
         livereload: {
            options: {
               middleware: function (connect) {
                  return [
                     lrSnippet,
                     mountFolder(connect, '.tmp'),
                     mountFolder(connect, yeomanConfig.src)
                  ];
               }
            }
         },
         test: {
            options: {
               middleware: function (connect) {
                  return [
                     mountFolder(connect, '.tmp'),
                     mountFolder(connect, 'test')
                  ];
               }
            }
         },
         dist: {
            options: {
               middleware: function (connect) {
                  return [
                     mountFolder(connect, yeomanConfig.dist)
                  ];
               }
            }
         }
      },
      /**
       * Url to open for `grunt server`.
       */
      open: {
         server: {
            url: 'http://localhost:<%= connect.options.port %>'
         }
      },
      /**
       * Clean some directories...
       */
      clean: {
         coverage: 'coverage',
         dist: {
            files: [
               {
                  dot: true,
                  src: [
                     '.tmp',
                     '<%= yeoman.dist %>/*',
                     '!<%= yeoman.dist %>/.git*'
                  ]
               }
            ]
         },
         distBower: {
            files: [
               {
                  src: [
                     '<%= yeoman.dist %>/<%= yeoman.bowerComponent %>'
                  ]
               }
            ]
         },
         server: '.tmp'
      },
      /**
       * Javascript coding stlye.
       */
      jshint: {
         options: {
             node: true,
             curly: true,
             immed: true,
             newcap: true,
             noarg: true,
             sub: true,
             boss: true,
             eqnull: true,
             globals: {
                 angular: true
             }
         },
         all: [
             'Gruntfile.js',
            '<%= yeoman.src %>/<%= yeoman.app %>/**/*.js',
            '!<%= yeoman.src %>/<%= yeoman.app %>/**/*.spec.js'
         ]
      },
      // not used since Uglify task does concat,
      // but still available if needed
      /*concat: { }*/
      /**
       * Prefixes assets javascripts and css by a hash to cache static files for production.
       */
      rev: {
         dist: {
            options: {
               algorithm: 'sha1',
               length: 4
            },
            files: {
               src: [
                  '<%= yeoman.dist %>/<%= yeoman.app %>/{,*/}*.js',
                  '<%= yeoman.dist %>/<%= yeoman.assets.css %>/{,*/}*.css'
               ]
            }
         }
      },
      useminPrepare: {
         html: '<%= yeoman.src %>/index.html',
         options: {
            dest: '<%= yeoman.dist %>'
         }
      },
      usemin: {
         html: ['<%= yeoman.dist %>/{,*/}*.html'],
         options: {
            dirs: ['<%= yeoman.dist %>']
         }
      },
      imagemin: {
         dist: {
            files: [
               {
                  expand: true,
                  cwd: '<%= yeoman.src %>/<%= yeoman.assets.img %>',
                  src: '{,*/}*.{png,jpg,jpeg}',
                  dest: '<%= yeoman.dist %>/<%= yeoman.assets.img %>'
               }
            ]
         }
      },
      svgmin: {
         dist: {
            files: [
               {
                  expand: true,
                  cwd: '<%= yeoman.src %>/<%= yeoman.assets.img %>',
                  src: '{,*/}*.svg',
                  dest: '<%= yeoman.dist %>/<%= yeoman.assets.img %>'
               }
            ]
         }
      },
      cssmin: {
         // By default, your `index.html` <!-- Usemin Block --> will take care of
         // minification. This option is pre-configured if you do not wish to use
         // Usemin blocks.
         // dist: {
         //   files: {
         //     '<%= yeoman.dist %>/styles/main.css': [
         //       '.tmp/styles/{,*/}*.css',
         //       '<%= yeoman.src %>/styles/{,*/}*.css'
         //     ]
         //   }
         // }
      },
      htmlmin: {
         dist: {
            options: {
               /*removeCommentsFromCDATA: true,
                // https://github.com/yeoman/grunt-usemin/issues/44
                //collapseWhitespace: true,
                collapseBooleanAttributes: true,
                removeAttributeQuotes: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeOptionalTags: true*/
            },
            files: [
               {
                  expand: true,
                  cwd: '<%= yeoman.src %>',
                  src: ['*.html', 'views/*.html'],
                  dest: '<%= yeoman.dist %>'
               }
            ]
         }
      },
      // Put files not handled in other tasks here
      copy: {
          // Copy coverage lcov.info too coverage root folder. It's in a browser specific folder.
          // See issue: https://github.com/karma-runner/karma-coverage/pull/62
          coverage: {
              mode: true,
              expand : true,
              flatten : true,
              cwd : 'coverage',
              src : ['**/lcov.info'],
              dest : 'coverage',
              filter : 'isFile'
          },
          dist: {
            files: [
               {
                  expand: true,
                  dot: true,
                  cwd: '<%= yeoman.src %>',
                  dest: '<%= yeoman.dist %>',
                  src: [
                     '*.{ico,png,txt}',
                     '.htaccess',
                     '<%= yeoman.bowerComponent %>/**/*',
                     '<%= yeoman.assets.img %>/{,*/}*.{gif,webp}',
                     '<%= yeoman.assets.fonts %>/*',
                     '<%= yeoman.assets.locale %>/*.json'
                  ]
               },
               {
                  expand: true,
                  cwd: '.tmp/<%= yeoman.assets.img %>',
                  dest: '<%= yeoman.dist %>/<%= yeoman.assets.img %>',
                  src: [
                     'generated/*'
                  ]
               },
               // Bootstrap fonts
               {
                  expand: true,
                  cwd: '<%= yeoman.src %>/<%= yeoman.bowerComponent %>/bootstrap/fonts',
                  dest: '<%= yeoman.dist %>/<%= yeoman.assets.fonts %>',
                  src: [ '**']
               },
               // Font awesome fonts
               {
                  expand: true,
                  cwd: '<%= yeoman.src %>/<%= yeoman.bowerComponent %>/font-awesome/fonts',
                  dest: '<%= yeoman.dist %>/<%= yeoman.assets.fonts %>',
                  src: [ '**' ]
               }
            ]
         },
         styles: {
            expand: true,
            cwd: '<%= yeoman.src %>/<%= yeoman.assets.css %>',
            dest: '.tmp/<%= yeoman.assets.css %>/',
            src: '{,*/}*.css'
         }
      },
      concurrent: {
         server: [
            'copy:styles'
         ],
         test: [
            'copy:styles'
         ],
         dist: [
            'copy:styles',
            'imagemin',
            'svgmin',
            'htmlmin'
         ]
      },
      karma: {
         unit: {
            configFile: 'karma.conf.js',
            singleRun: true
         }
      },
      ngmin: {
         dist: {
            files: [
               {
                  expand: true,
                  cwd: '<%= yeoman.dist %>/<%= yeoman.app %>',
                  src: '*.js',
                  dest: '<%= yeoman.dist %>/<%= yeoman.app %>'
               }
            ]
         }
      },
       uglify: {
           options: {
               mangle: false
           }
       }
   });
};
