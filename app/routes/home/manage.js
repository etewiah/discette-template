import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
  	createNewSection: function(){
  		var create_section_endpoint = '/drive/section/create';
      var newSectionPromise = $.ajax(create_section_endpoint, {
        data: this.get('controller.newSection'),
        method: 'POST'
      });
      var self = this;
      newSectionPromise.then(function(result) {
        },
        function(error) {
        });
  	},
  	deleteSection: function(section){
  		var delete_section_endpoint = '/drive/section/' + section.id;
      var newSectionPromise = $.ajax(delete_section_endpoint, {
        method: 'DELETE'
      });
      var self = this;
      newSectionPromise.then(function(result) {
        },
        function(error) {
        });
  	}
  },
  model: function(params) {
    var apiUrl = "/drive/sections";
    var topics = $.getJSON(apiUrl).then(
      function(result) {
        return result;
      });
    return topics;
  },
  setupController: function(controller, model) {
    controller.set('model', model);
    controller.set('newSection', {});
  }
});
