import Ember from 'ember';
import Section from '../models/section';


export default Ember.Route.extend({
  actions: {
    deleteSection: function(section) {
      var delete_section_endpoint = '/drive/admin/section/' + section.id;
      var deleteSectionPromise = $.ajax(delete_section_endpoint, {
        method: 'DELETE'
      });
      var self = this;
      deleteSectionPromise.then(function(result) {},
        function(error) {});
    },
    createNewDiscette: function() {
      var create_discette_endpoint = '/drive/admin/discette/create';
      var newDiscettePromise = $.ajax(create_discette_endpoint, {
        data: this.get('controller.newDiscette'),
        method: 'POST'
      });
      var self = this;
      newDiscettePromise.then(function(result) {},
        function(error) {});
    },
    deleteDiscette: function(discette) {
      var delete_discette_endpoint = '/drive/admin/discette/' + discette.id;
      var deleteDiscettePromise = $.ajax(delete_discette_endpoint, {
        method: 'DELETE'
      });
      var self = this;
      deleteDiscettePromise.then(function(result) {},
        function(error) {});
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
    controller.set('newSection', {});
    controller.set('newDiscette', {});
  }
});
