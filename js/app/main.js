// All paths are relative to app dir (js/app)
require.config({
  paths: {
    domReady: '../../bower_components/requirejs-domready/domReady',
    angular: '../../bower_components/angular/angular'
  },

  shim: {
    angular: {
      exports: 'angular'
    }
  },

  deps: ['ng_bootstrap']
});
