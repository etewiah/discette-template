import Ember from 'ember';

export default Ember.Route.extend({
  actions: {},

  beforeModel: function() {
    // TODO check preloaded data - if section is not claimed, redirect to 'setup' route
    // this.transitionTo('set_up');
  },

  setupController: function(controller, model) {
    // model = this.modelFor('home');
    if (model.section_status && model.section_status === "unclaimed") {
      controller.set('model', []);
    } else {
      controller.set('model', model.discette_topics);
      if (model.discette_topics.length < 1) {
        controller.set('noTopics', true);
      }
      // controller.set('aboutTopic', model.about_topic);
      // should be safe to remove below:
      controller.set('category', model.category);
    }
  }
});
