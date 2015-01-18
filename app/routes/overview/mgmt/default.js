import Ember from 'ember';

export default Ember.Route.extend({

  beforeModel: function() {
    // TODO - check admin status
    this.transitionTo('overview.mgmt.sections')
    // if(this.get('settingsService.currentSection.status') === "unclaimed"){
    //   this.transitionTo('start');
    // }
    // else{
    //   this.transitionTo('home');
    // }
  }

});

