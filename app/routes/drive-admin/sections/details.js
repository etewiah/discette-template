import Ember from 'ember';

export default Ember.Route.extend({

  model: function(params) {
    var apiUrl = "/drive/admin/section/" + params.id;
    var topics = $.getJSON(apiUrl).then(
      function(result) {
        return result;
      });
    return topics;
  },
  setupController: function(controller, model) {
    controller.set('model', model);
    var discettes = this.modelFor('drive-admin').discettes;
    controller.set('discettes',discettes);
  }

});

