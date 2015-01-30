import Ember from 'ember';
import Section from '../../../models/section';

export default Ember.Route.extend({

  model: function(params) {
    var apiUrl = "/drive/admin/section/" + params.id;
    var topics = $.getJSON(apiUrl).then(
      function(result) {
        return result;
      });
    return topics;
  },
  setupController: function(controller, model) {
    var section = Section.create(model.section);
    controller.set('model', section);
    var discettes = this.modelFor('drive-admin').discettes;
    controller.set('discettes',discettes);
  }

});

