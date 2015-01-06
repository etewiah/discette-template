import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    startReplyToTopic: function() {
      this.controller.set('isEditing', true);
    },
    processReplyToTopic: function() {
      this.controller.set('isEditing', false);
      var topic_id = this.controller.get('model.id');
      var category_id = this.controller.get('model.category_id');
      var draft = this.controller.get('model.draft');
      var apiKey = this.get('settingsService.apiKey');
      var apiUsername = this.get('settingsService.apiUsername');
      debugger;

      var create_post_endpoint = '/posts';
      var reply = $.ajax(create_post_endpoint, {
        data: {
          "api_key": apiKey,
          "api_username": apiUsername,
          "raw": "Need to see how a post is added 222..",
          "topic_id": topic_id,
          "archetype": "regular",
          "category": category_id
        },
        method: 'POST'

      });
      var that = this;
      reply.then(function(result) {
        console.log(that);
        debugger;
      },
      function(error){
        debugger;
      });

    }
  },
  model: function(params) {
    // var topic = this.store.find('topic', params.id);
    // var apiUrl = "/api/topics/3";
    var apiUrl = "/t/" + params.slug + "/" + params.id + ".json";
    var topic = $.getJSON(apiUrl).then(
      function(detailedTopic) {
        return detailedTopic;
      });
    return topic;
  },
  setupController: function(controller, model) {
    // controller.set('model', model.get('data'));
    controller.set('model', model);
    controller.set('isEditing', false);
  }
});
