/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp({
  fingerprint: {
    enabled: true,
    // prepend: '/plugins/Klavado/',
    generateRailsManifest: true,
    generateAssetMap: true,
    extensions: ['css','js'],
    replaceExtensions: ['html', 'css', 'appcache']
  },
  'ember-cli-summernote': {
    "importBootstrapCSS": true,
    "importBootstrapJS": true,
    "importFontawesomeCSS": true
  },
  outputPaths: {
    app: {
      html: 'index.html'
        // html: 'example_home.html,orig_index.html'
    }
  }
});

app.import('vendor/preloadstore.js');

app.import('vendor/jquery.pagedown-bootstrap.combined.js');
app.import('vendor/jquery.pagedown-bootstrap.css');
app.import('vendor/jquery.cookie.js');


var bootstrapDir = app.bowerDirectory + '/bootstrap-sass-official/assets';

// select bootstrap JavaScript components to include
var bootstrapComponents = ['dropdown', 'alert', 'transition'];

for (var index in bootstrapComponents) {
  app.import(bootstrapDir + '/javascripts/bootstrap/' + bootstrapComponents[index] + '.js');
}


// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

module.exports = app.toTree();
