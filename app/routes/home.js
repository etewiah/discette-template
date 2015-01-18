import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    if (this.get('settingsService.currentSection.status') === "unclaimed") {
      this.transitionTo('start');
    }
  },
  actions: {
    startNewTopic: function() {
      var currentUser = this.controllerFor('application').get('currentUser');
      if (currentUser) {
        this.send('openModal', 'modal/new_topic');
      } else {
        this.send('openModal', 'modal/log_in');
      }
    }
  },
  model: function(params) {
    // if (PreloadStore.data.discette_topics) {
    //  return PreloadStore.data.discette_topics;
    // }
    var apiUrl = "/drive/section/topics";
    var topics = $.getJSON(apiUrl).then(
      function(result) {
        return result;
      });
    return topics;
  },
});
