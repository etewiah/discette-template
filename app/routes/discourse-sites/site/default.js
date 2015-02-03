import Ember from 'ember';
import Site from '../../../models/site';

export default Ember.Route.extend({
  titleToken: function() {
    return this.controller.get('currentSite.display_name');
  },
  model: function(params) {
    var slug = this.paramsFor('discourse-sites.site').slug;
    var siteModel = Site.create({
      slug: slug
    });
    var topics = siteModel.getLatestTopics().then(function(result) {
      return result;
    }, function(error) {});
    return topics;
  },
  setupController: function(controller, model) {
    controller.set('model', model);
    var currentSiteSlug = this.paramsFor('discourse-sites.site').slug;
    controller.set('currentSiteSlug', currentSiteSlug);
    var categoryRoot = this.modelFor('discourse-sites.site');
    controller.set('categoryRoot', categoryRoot);

    var sites = this.modelFor('discourse-sites');
    var currentSite = sites.findBy('slug', currentSiteSlug);
    controller.set('currentSite',currentSite);
  }
});
