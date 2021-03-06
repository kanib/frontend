// Karma configuration

var path = require('path');

module.exports = function(config) {
  
  var DEV_OUT = 'resources/public/cljs/out';

  config.set({
    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: [ 'cljsTest'],

    // list of files / patterns to load in the browser
    files: [
      'test-js/test-render-context.js',
      'http://circlehost:8080/assets/js/om-dev.js.stefon',
      path.join(DEV_OUT, 'goog/base.js'),
      path.join(DEV_OUT, 'frontend-dev.js'),
      'test-js/require-karma.js',
      { pattern: path.join(DEV_OUT, '**/*.js'), included: false},
      { pattern: path.join(DEV_OUT, '**/*.cljs'), included: false}
    ],


    // list of files to exclude
    exclude: [
      
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
	'frontend-dev.js': ['sourcemap']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
