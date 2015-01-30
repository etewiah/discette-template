import Ember from 'ember';
// not calling below Discette to avoid clashing with global Discette
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
  }

});

