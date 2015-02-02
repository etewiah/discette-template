import Ember from 'ember';
import Site from '../models/site';

export default Ember.Route.extend({
  model: function() {
    var sites = Site.getAll().then(function(result) {
      return result;
    }, function(error) {});
    return sites;
  },
  setupController: function(controller, model) {
    debugger;
    controller.set('model', model);
  }
});
