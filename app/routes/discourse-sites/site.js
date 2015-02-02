import Ember from 'ember';
import Site from '../../models/site';

export default Ember.Route.extend({
  model: function(params) {
    var siteModel = Site.create({
      slug: params.slug
    });
    var topics = siteModel.getCategories().then(function(result) {
      return result;
    }, function(error) {});
    return topics;
  },
  // setupController: function(controller, model) {
  //   controller.set('model', model);
  //   var currentSiteSlug = this.paramsFor('discourse-sites.site').slug;
  //   controller.set('currentSiteSlug', currentSiteSlug);
  // }
});
