import Ember from 'ember';
import Section from '../models/section';
import Discette from '../models/discette';


export default Ember.Route.extend({
  actions: {
    sectionCreateSuccess: function(section){
      this.transitionTo('drive-admin.sections.details', section.id);
    },
    discetteCreateSuccess: function(discette){
      this.transitionTo('drive-admin.discettes.details', discette.id);
    },
    discetteDeleteSuccess: function(){
      this.transitionTo('drive-admin.discettes.default');
    },
    sectionDeleteSuccess: function(){
      this.transitionTo('drive-admin.sections.default');
    }
  },
  model: function(params) {
    var apiUrl = "/drive/admin/sections";
    var topics = $.getJSON(apiUrl).then(
      function(result) {
        return result;
      });
    return topics;
  },
  setupController: function(controller, model) {
    controller.set('model', model);
    controller.set('newSection', Section.create({
      isNew: true
    }));
    controller.set('newDiscette', Discette.create({
      isNew: true
    }));
  }
});
