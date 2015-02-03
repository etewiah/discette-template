import Ember from 'ember';
import Site from '../../../models/site';
import Topic from '../../../models/topic';


export default Ember.Route.extend({
  titleToken: function(){
    return this.controller.get('model.title');
  },

  model: function(params) {
    var slug = this.paramsFor('discourse-sites.site').slug;
    var siteModel = Site.create({
      slug: slug
    });
    var topic = siteModel.getTopic(params.topic_id).then(function(result) {
      return result;
    }, function(error) {});
    return topic;
  },
  setupController: function(controller, model) {
    var topic = Topic.create(model);
    controller.set('model', topic);
    // var currentSite = this.modelFor('discourse-sites.site').currentSite;
    // debugger;
    var sites = this.modelFor('discourse-sites');
    var slug = this.paramsFor('discourse-sites.site').slug;
    var currentSite = sites.findBy('slug', slug);
    controller.set('currentSite', currentSite);
  }
});
