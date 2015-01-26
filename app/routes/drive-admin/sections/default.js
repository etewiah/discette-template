import Ember from 'ember';

export default Ember.Route.extend({

  setupController: function(controller, model) {
    controller.set('model', model);
    // model for drive-admin gets passed through by default
    // var discettes = this.modelFor('drive-admin').discettes;
    // controller.set('discettes',discettes);
  }

});

