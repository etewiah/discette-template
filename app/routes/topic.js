import Ember from 'ember';

export default Ember.Route.extend({

  model: function(params) {
    // var topic = this.store.find('topic', params.id);
    var apiUrl = "/api/topics/3";
    var topic = $.getJSON(apiUrl).then(
      function(detailedTopic) {
        return detailedTopic;
      });
    return topic;
  },
  setupController: function(controller, model) {
    // controller.set('model', model.get('data'));
    controller.set('model', model);
  }
});
