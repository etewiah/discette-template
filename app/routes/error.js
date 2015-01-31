import Ember from 'ember';

export default Ember.Route.extend({
  actions: {},
  // model: function(params) {
  //   debugger;
  // },
  setupController: function(controller, model) {
    if (model) {
      if (model.status === 401) {
        model.errorMessage = "You are not authorized to view this page";
      } else {
        if (model.responseJSON && model.responseJSON.errors) {
          model.errorMessage = error.responseJSON.errors[0];
        }
      }
      controller.set('model', model);
    }
  }
});
