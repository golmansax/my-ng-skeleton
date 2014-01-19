(function() {
  'use strict';

  module.exports = {
    //src: TODO
    options: {
      // Use this for debugging
      keepRunner: true,

      specs: 'js/spec/**/*_spec.js',
      template: require('grunt-template-jasmine-requirejs'),
      templateOptions: {
        requireConfigFile: 'js/spec/test_main.js'
      }
    }
  };
})();
