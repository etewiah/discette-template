import Ember from 'ember';

var ApplicationRoute;

ApplicationRoute = Ember.Route.extend({
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
    }
  }
});

export default ApplicationRoute;
