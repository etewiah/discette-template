import Ember from 'ember';

export default Ember.Route.extend({
  actions: {

  },
  model: function(params) {
    var apiUrl = "/drive/sections";
    var topics = $.getJSON(apiUrl).then(
      function(result) {
        return result;
      });
    return topics;
  },
  setupController: function(controller, model) {
    controller.set('model', model);
    controller.set('newSection', {});
    controller.set('newDiscette', {});
  }
});
