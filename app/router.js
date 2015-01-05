import Ember from "ember";
import config from "./config/environment";

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route("home");
  // this.resource("topic", function() {});
  this.resource('topic', {
    path: 'c/:id/:slug'
  }, function() {

    this.route('default', {
      path: '/'
    });
  });
});

export default Router;
