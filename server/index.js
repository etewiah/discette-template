// To use it create some files under `routes/`
// e.g. `server/routes/ember-hamsters.js`
//
// module.exports = function(app) {
//   app.get('/ember-hamsters', function(req, res) {
//     res.send('hello');
//   });
// };

module.exports = function(app) {
  var globSync   = require('glob').sync;
  var mocks      = globSync('./mocks/**/*.js', { cwd: __dirname }).map(require);
  var proxies    = globSync('./proxies/**/*.js', { cwd: __dirname }).map(require);

  // below allows me to be able to disable mocking by running server so:
  // DISABLE_MOCK=true ember serve --proxy http://madrid.lvh.me:3000/
  // from: http://stackoverflow.com/questions/26686764/ember-cli-how-to-get-proxy-to-override-http-mock
	if (process.env.DISABLE_MOCK === 'true'){
	    return;
	}

  // Log proxy requests
  var morgan  = require('morgan');
  app.use(morgan('dev'));

  mocks.forEach(function(route) { route(app); });
  proxies.forEach(function(route) { route(app); });

};
