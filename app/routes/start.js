import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller, model) {
    var currentSection = this.get('settingsService.currentSection');
    controller.set('model', currentSection);
    controller.set('newSection', {
    	description: '',
    	name: ''
    });
    if (currentSection.status === "unclaimed") {
      controller.set('isAvailable', true);
    }
  },
});
