import Ember from 'ember';

export default Ember.Route.extend({
  // beforeModel: function() {
  //   if (this.get('settingsService.currentSection.status') === "unclaimed") {
  //     this.transitionTo('start');
  //   }
  // },
  // actions: {
  //   startNewTopic: function() {
  //     var currentUser = this.controllerFor('application').get('currentUser');
  //     if (currentUser) {
  //       this.send('openModal', 'modal/new_topic');
  //     } else {
  //       this.send('showLogIn');
  //     }
  //   }
  // },
  model: function(params) {
    var apiUrl = "/passthrough/latest.json";
     // "https://meta.discourse.org/latest.json";
    // var topics = $.ajax({
    //   url: apiUrl,
    //   dataType: 'jsonp',
    //   success: function(response) {
    //     debugger;
    //     // response.data.forEach(function(order) {
    //     //   content.addObject(App.Order.create(order))
    //     // }, this)
    //   }
    // });
    var topics = $.getJSON(apiUrl).then(
      function(result) {
        return result;
      });
    return topics;
  },
  setupController: function(controller, model) {
    controller.set('model', model);
  }
});
