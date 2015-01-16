import Ember from 'ember';

export default Ember.Route.extend({
  actions: {},

  beforeModel: function() {
    // TODO check preloaded data - if section is not claimed, redirect to 'setup' route
    // this.transitionTo('set_up');
  },

  setupController: function(controller, model) {
    // model = this.modelFor('home');
    // debugger;
    if (model.section_status && model.section_status === "unclaimed") {
      controller.set('model', []);
    } else {
      controller.set('model', model.discette_topics);
      // controller.set('aboutTopic', model.about_topic);
      controller.set('category', model.category);

    };

  }
});
