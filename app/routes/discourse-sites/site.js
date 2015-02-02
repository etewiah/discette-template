import Ember from 'ember';
import Site from '../../models/site';

export default Ember.Route.extend({
  model: function(params) {
    var siteModel = Site.create({
      slug: params.slug
    });
    var topics = siteModel.getLatestTopics().then(function(result) {
      return result;
    }, function(error) {});
    return topics;
  },
  setupController: function(controller, model) {
    controller.set('model', model);

    var sites = this.modelFor('discourse-sites');
    var slug = this.paramsFor('discourse-sites.site').slug;
    var currentSite = sites.findBy('slug', slug);
    controller.set('currentSite', currentSite);
  }
});
