import Ember from 'ember';
import Site from '../models/site';

export default Ember.Route.extend({
  model: function(params) {
    var siteModel = Site.create({
      host: "https://talk.birmingham.io"
    });
    var topics = siteModel.getLatestTopics().then(function(result) {
      return result;
    }, function(error) {});
    return topics;
  },
  setupController: function(controller, model) {
    controller.set('model', model);
  }
});
