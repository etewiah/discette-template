import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
  },

  setupController: function(controller, model) {
    // model = this.modelFor('home');
    controller.set('model', model.discette_topics);
    // controller.set('aboutTopic', model.about_topic);
    controller.set('category', model.category);

  }
});
