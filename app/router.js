import Ember from "ember";
import config from "./config/environment";

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route("start");
  // this.route("about-section");
  // this.route("manage-section");

  this.resource("overview", {
    path: "overview"
  }, function() {
    this.route("default", {
      path: "/"
    });
    this.resource("overview.mgmt", {
      path: "mgmt"
    }, function() {
      this.route("default", {
        path: "/"
      });
      this.route("sections", {
        path: "/sections"
      });
      this.route("discettes", {
        path: "/discettes"
      });
    });
  });

  this.resource("home", {
    path: "home"
  }, function() {
    this.route("default", {
      path: "/"
    });
    this.route("about", {
      path: "/about"
    });
    this.route("manage", {
      path: "/manage"
    });
  });


  this.resource("topic", {
    path: "d/:id/:slug"
  }, function() {
    this.route("default", {
      path: "/"
    });
  });
});

export default Router;
