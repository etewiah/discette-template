/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'discette',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    ENV.EmberENV.isDevelopment = true;
    if (!process.env.DISABLE_MOCK){
      // if we are in dev and we have enabled mocks
      // set below to true to ensure csrf token is not fetched in application route beforeModel hook:
      ENV.EmberENV.disableCSRF = true;
    }
    else{
      // if we are in dev and we have disabled mocks
      // then assume we are forwarding to a discourse instance for which we will have
      // to use api keys to post
      ENV.EmberENV.useApiKeys = true;
    }
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }


  ENV.contentSecurityPolicy = {
    'img-src': "*",
    // below is needed for preloadstore stuff to work:
    'script-src': "'self' 'unsafe-inline'", 
    'style-src': "'self' 'unsafe-inline' http://fonts.googleapis.com"
  }

  return ENV;
};
