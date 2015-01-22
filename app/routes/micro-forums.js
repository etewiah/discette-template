import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    if (this.get('settingsService.currentSection.status') === "unclaimed") {
      this.transitionTo('start');
    }
    else{
      this.transitionTo('home');
    }
  }
});
