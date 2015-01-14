import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    startNewTopic: function() {
      var currentUser = this.controllerFor('application').get('currentUser');
      if (currentUser) {
        this.send('openModal', 'modal/new_topic');
      } else{
        this.send('openModal', 'modal/log_in');
      }
    }
  },
  model: function(params) {
  	// if (PreloadStore.data.discette_topics) {
  	// 	return PreloadStore.data.discette_topics;
  	// }
    var apiUrl = "discette_topics";
    var topics = $.getJSON(apiUrl).then(
      function(result) {
        return result;
      });
    return topics;
  },
  // setupController: function(controller, model) {
  //   controller.set('model', model.discette_topics);
  //   controller.set('aboutTopic', model.about_topic);
  //   controller.set('category', model.category);

  // }
});
