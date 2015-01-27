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
    }

    // deleteSection: function(section) {
    //   var delete_section_endpoint = '/drive/admin/section/' + section.id;
    //   var deleteSectionPromise = $.ajax(delete_section_endpoint, {
    //     method: 'DELETE'
    //   });
    //   var self = this;
    //   deleteSectionPromise.then(function(result) {},
    //     function(error) {});
    // },
    // deleteDiscette: function(discette) {
    //   var delete_discette_endpoint = '/drive/admin/discette/' + discette.id;
    //   var deleteDiscettePromise = $.ajax(delete_discette_endpoint, {
    //     method: 'DELETE'
    //   });
    //   var self = this;
    //   deleteDiscettePromise.then(function(result) {},
    //     function(error) {});
    // }
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
