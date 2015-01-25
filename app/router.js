import Ember from "ember";
import config from "./config/environment";

// https://gist.github.com/machty/8413411
// Extend Ember.Route to add support for sensible
// document.title integration.
Ember.Route.reopen({

  // `titleToken` can either be a static string or a function
  // that accepts a model object and returns a string (or array
  // of strings if there are multiple tokens).
  titleToken: null,

  // `title` can either be a static string or a function
  // that accepts an array of tokens and returns a string
  // that will be the document title. The `collectTitleTokens` action
  // stops bubbling once a route is encountered that has a `title`
  // defined.
  title: null,

  // Provided by Ember
  _actions: {
    collectTitleTokens: function(tokens) {
      var titleToken = this.titleToken;
      if (typeof this.titleToken === 'function') {
        titleToken = this.titleToken(this.currentModel);
      }

      if (Ember.isArray(titleToken)) {
        tokens.unshift.apply(this, titleToken);
      } else if (titleToken) {
        tokens.unshift(titleToken);
      }

      // If `title` exists, it signals the end of the
      // token-collection, and the title is decided right here.
      if (this.title) {
        var finalTitle;
        if (typeof this.title === 'function') {
          finalTitle = this.title(tokens);
        } else {
          // Tokens aren't even considered... a string
          // title just sledgehammer overwrites any children tokens.
          finalTitle = this.title;
        }

        // Stubbable fn that sets document.title
        this.router.setTitle(finalTitle);
      } else {
        // Continue bubbling.
        return true;
      }
    }
  }
});

Ember.Router.reopen({
  updateTitle: function() {
    this.send('collectTitleTokens', []);
  }.on('didTransition'),

  setTitle: function(title) {
    if (Ember.testing) {
      this._title = title;
    } else {
      window.document.title = title;
    }
  }
});

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route("start");
  this.route("micro-forums");
  // this.route("about-section");
  // this.route("manage-section");

  this.resource("overview", {
    path: "directory"
  }, function() {
    this.route("default", {
      path: "/"
    });
  });

  this.resource("drive-admin", {
    path: "drive-admin"
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
