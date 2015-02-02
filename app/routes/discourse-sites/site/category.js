import Ember from 'ember';
import Site from '../../../models/site';

export default Ember.Route.extend({
  model: function(params) {
    var slug = this.paramsFor('discourse-sites.site').slug;
    var siteModel = Site.create({
      slug: slug
    });
    var topics = siteModel.getLatestTopics(params.category_slug).then(function(result) {
      return result;
    }, function(error) {});
    return topics;
  },
  setupController: function(controller, model) {
    controller.set('model', model);
    var currentSiteSlug = this.paramsFor('discourse-sites.site').slug;
    controller.set('currentSiteSlug', currentSiteSlug);
    var categoryRoot = this.modelFor('discourse-sites.site');
    // var sites = this.modelFor('discourse-sites');
    // var slug = this.paramsFor('discourse-sites.site').slug;
    // var currentSite = sites.findBy('slug', slug);
    controller.set('categoryRoot', categoryRoot);
  }
});
