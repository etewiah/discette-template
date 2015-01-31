import Ember from 'ember';

var ApplicationRoute;

ApplicationRoute = Ember.Route.extend({
  title: function(tokens) {
    var sectionName = this.controller.get('currentSection.name');
    if (tokens && tokens.length > 0) {
      return tokens.join('-') + ' - ' + sectionName;
    } else {
      return sectionName;
    }
  },
  beforeModel: function() {
    // debugger;
    if (!EmberENV.disableCSRF) {
      return this.csrf.fetchToken();
    }
  },
  actions: {
    openModal: function(modal, model) {
      if (model) {
        this.controllerFor(modal).set('model', model);
      }
      return this.render(modal, {
        into: 'application',
        outlet: 'modal'
      });
    },
    closeModal: function() {
      return this.disconnectOutlet({
        outlet: 'modal',
        parentView: 'application'
      });
    },
    showLogIn: function() {
      // this.sendAction('openModalAction', 'modal/log_in');
      //setting this cookie ensures I will be redirected here after signup
      $.cookie('destination_url', location.href);
      var rootDomainBaseUrl = PreloadStore.get('discetteSettings.rootDomainBaseUrl') || 'http://klavado.com';
      window.location = rootDomainBaseUrl + "/login";
    },
    // error: function(error, transition) {
    //   if (error && error.status === 401) {
    //     // error substate and parent routes do not handle this error
    //     // return this.replaceWith('invalidAccess');
    //     // return this.transitionTo('modelNotFound');
    //   }

    //   // Return true to bubble this event to any parent route.
    //   return true;
    // }

  }
});

export default ApplicationRoute;
