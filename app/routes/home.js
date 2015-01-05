import Ember from 'ember';

export default Ember.Route.extend({

  model: function(params) {
  	// if (PreloadStore.data.discette_topics) {
  	// 	return PreloadStore.data.discette_topics;
  	// }
    var apiUrl = "/api/topics";
    var topics = $.getJSON(apiUrl).then(
      function(result) {
        return result.discette_topics;
      });
    return topics;
  },
  setupController: function(controller, model) {
    controller.set('model', model);
  }
});
