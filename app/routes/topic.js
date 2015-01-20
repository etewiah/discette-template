import Ember from 'ember';
import ENV from '../config/environment';
// not quite sure how to access above..

export default Ember.Route.extend({
  actions: {
    startNewTopic: function() {
      var currentUser = this.controllerFor('application').get('currentUser');
      if (currentUser) {
        this.send('openModal', 'modal/new_topic');
      } else {
        this.send('openModal', 'modal/log_in');
      }
    },
    cancelReplyToTopic: function() {
      this.controller.set('isEditing', false);
    },
    startReplyToTopic: function() {
      var currentUser = this.controllerFor('application').get('currentUser');
      if (currentUser) {
        this.controller.set('isEditing', true);
      } else{
        this.send('openModal', 'modal/log_in');
      }
    },
    processReplyToTopic: function() {
      this.controller.set('isEditing', false);
      var topic_id = this.controller.get('model.id');
      var category_id = this.controller.get('model.category_id');
      var draft = this.controller.get('model.draft');

      var replyData = {
        "raw": draft,
        "topic_id": topic_id,
        "archetype": "regular",
        "category": category_id
      };

      // if (EmberENV.useApiKeys) {
      //   replyData.apiKey = this.get('settingsService.apiKey');
      //   replyData.apiUsername = this.get('settingsService.apiUsername');
      // }

      var create_post_endpoint = '/posts';
      var reply = $.ajax(create_post_endpoint, {
        data: replyData,
        method: 'POST'

      });
      var that = this;
      reply.then(function(result) {
          // console.log(that);
          var postStream = that.controller.get('model.post_stream');
          postStream.posts.pushObject(result);
        },
        function(error) {
          // TODO - handle errors
          // debugger;
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
