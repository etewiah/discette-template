import Ember from 'ember';
import Disc from '../../../models/discette';

export default Ember.Route.extend({

  model: function(params) {
    var apiUrl = "/drive/admin/discette/" + params.id;
    var topics = $.getJSON(apiUrl).then(
      function(result) {
        return result;
      });
    return topics;
  },
  setupController: function(controller, model) {
    var disc = Disc.create(model.discette);
    controller.set('model', disc);
    // var discettes = this.modelFor('drive-admin').discettes;
    // controller.set('discettes',discettes);
  }

});

