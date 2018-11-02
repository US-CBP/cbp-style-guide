'use strict';

module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    var config = grunt.file.readYAML('./_config.yml');

    // Configurable paths
    var paths = {
        tmp: '.tmp',
        assets: './src/generated',
        downloads: './src/downloads',
        dist: './cbp'
      };

    grunt.initConfig({

        // Project settings
        paths: paths,
        config: config,

        // Watches files for changes and runs tasks based on the changed files
        watch: {
            js: {
                files: ['src/front/scripts/{,*/}*.js'],
                tasks: ['jshint', 'concat:mainjs']
              },
          },

        // Clean out gen'd folders
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '<%= paths.dist %>', '<%= paths.assets %>']
                  }]
              }
          },

        // Lint JS
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
              },
            all: [
                'Gruntfile.js',
                'src/front/scripts/*.js'
            ]
          },

        // SASS -> CSS
        sass: {
            options: {
                loadPath: ['node_modules'],
                style: 'expanded',
              },
            dist: {
                files: [{
                    expand: true,
                    cwd: 'src/front/styles',
                    src: ['main.scss'],
                    dest: '<%= paths.assets %>/styles',
                    ext: '.css'
                  }]
              }
          },

        // Add vendor prefixed styles to CSS
        autoprefixer: {
            options: {
                browsers: ['> 4%', 'last 4 versions']
              },
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= paths.assets %>/styles/',
                    src: '{,*/}*.css',
                    dest: '<%= paths.assets %>/styles/'
                  }, {
                    expand: true,
                    cwd: '<%= paths.downloads %>/css/',
                    src: 'src/cbpstrap.min.css',
                    dest: '<%= paths.downloads %>/css/'
                  }]
              }
          },

        // Bundle JS/CSS files
        concat: {
            // misc vendor
            vendorjs: {
                src: [
                    'node_modules/jquery/dist/jquery.js',
                    'node_modules/cbp-theme/dist/cbp-theme-inputmask.umd.js',
                    'node_modules/select2/dist/js/select2.js',
                    'src/front/vendor/jquery-ui-1.11.1.custom/jquery-ui.js',
                    'node_modules/lodash/lodash.min.js',
                    'node_modules/selectize/dist/js/standalone/selectize.js',
                    'node_modules/jquery-ui/ui/minified/core.min.js',
                    'node_modules/jquery-ui/ui/minified/datepicker.min.js',
                    'node_modules/jquery-ui/ui/minified/progressbar.min.js',
                    'node_modules/hopscotch/dist/js/hopscotch.min.js',
                    'node_modules/cbp-theme/dist/cbp-theme.browser.bundle.umd.js'
                ],
                dest: '<%= paths.assets %>/scripts/vendor.js'
              },
            // main js
            mainjs: {
                src: [
                    'src/front/scripts/index.js'
                ],
                dest: '<%= paths.assets %>/scripts/main.js'
              },
            // vendor css
            vendorcss: {
                src: [
                    'src/front/vendor/jquery-ui-1.11.1.custom/jquery-ui.structure.css',
                    'node_modules/font-awesome/css/font-awesome.css',
                    'node_modules/select2/dist/css/select2.css',
                    'node_modules/selectize/dist/css/selectize.css',
                    'node_modules/hopscotch/dist/css/hopscotch.css',
                    'node_modules/cbp-theme/dist/cbp-theme.css'
                 ],
                dest: '<%= paths.assets %>/styles/vendor.css'
              },
          },

        // Copies remaining files to places other tasks can use
        copy: {
            dist: {
                files: [{ // htmlshiv to assets for < IE9
                    dot: true,
                    expand: true,
                    cwd: 'src/front/vendor/html5shiv/',
                    src: ['html5shiv.min.js'],
                    dest: '<%= paths.assets %>/vendor/html5shiv/'
                  }, { // favicon sprite to assets folder
                    dot: true,
                    expand: true,
                    cwd: 'src/front/',
                    src: 'favicon.ico',
                    dest: '<%= paths.assets %>/'
                  },
                    {
                    dot: true,
                    expand: true,
                    cwd: './src/front/images',
                    src: '{,*/}*.{gif,jpeg,jpg,png,svg}',
                    dest: '<%= paths.assets %>/images'
                  }, {
                    dot: true,
                    expand: true,
                    cwd: './node_modules/cbp-theme/dist',
                    src: '*.css',
                    dest: '<%= paths.assets %>/vendor/cbp-theme/styles'
                  }, {
                    dot: true,
                    expand: true,
                    cwd: './node_modules/cbp-theme/dist',
                    src: '*.js*',
                    dest: '<%= paths.assets %>/vendor/cbp-theme/js'
                  }, {
                    dot: true,
                    expand: true,
                    cwd: './node_modules/nouislider/distribute/',
                    src: '*',
                    dest: '<%= paths.assets %>/vendor/nouislider/'
                  }, {
                    dot: true,
                    expand: true,
                    cwd: './node_modules/font-awesome/fonts',
                    src: '{,*/}*.{otf,eot,svg,ttf,woff,woff2}',
                    dest: '<%= paths.assets %>/styles/font-awesome/fonts' // for local development!
                  }, {
                    dot: true,
                    expand: true,
                    cwd: './node_modules/roboto-fontface/fonts/roboto',
                    src: '{,*/}*.{woff,woff2}',
                    dest: '<%= paths.assets %>/styles/roboto-fontface/fonts/roboto' // for local development!
                  }, {
                    dot: true,
                    expand: true,
                    cwd: './node_modules/hopscotch/dist/img',
                    src: '{,*/}*.{gif,jpeg,jpg,png}',
                    dest: '<%= paths.assets %>/img'
                  }
                  ]
              }
          }

      });

    grunt.registerTask('build', [
        'clean:dist',
        'jshint',
        'sass',
        'concat',
        'autoprefixer',
        'copy:dist'
    ]);

    grunt.registerTask('default', [
        'build'
    ]);
  };
