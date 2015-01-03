import Ember from 'ember';

export default Ember.Route.extend({

  model: function(params) {
  	if (PreloadStore.data.discette_topics) {
  		return PreloadStore.data.discette_topics;
  	}
  	else{
  		debugger;
  	}
  },
  setupController: function(controller, model) {
    controller.set('model', model);
  }
});
