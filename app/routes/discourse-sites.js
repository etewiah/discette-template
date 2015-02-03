import Ember from 'ember';
import Site from '../models/site';

export default Ember.Route.extend({
  actions: {
    showAddSiteModal: function() {
      // debugger;
      this.controllerFor('modal/add-site').set('model', this.controller.model);
      this.send('openModal', 'modal/add-site');
    }
  },
  model: function() {
    var sites = Site.getAll().then(function(result) {
      return result;
    }, function(error) {});
    return sites;
  },
  setupController: function(controller, model) {
    controller.set('model', model);
  }
});
