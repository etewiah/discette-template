// import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    cancelReplyToTopic: function() {
      this.controller.set('isCommenting', false);
    },
    cancelPrimaryPostEdit: function() {
      this.controller.set('isEditingPrimaryPost', false);
    },
    startEditingPrimaryPost: function() {
      var currentUser = this.controllerFor('application').get('currentUser');
      if (currentUser) {
        this.controller.set('isEditingPrimaryPost', true);
        this.controller.set('isCommenting', false);
        var postApiUrl = "/posts/" + this.controller.get('primaryPost.id')+ ".json";
        var that = this;
        var post = $.getJSON(postApiUrl).then(
          function(detailedPost) {
            that.controller.set('primaryPostWithRaw', detailedPost);
          });
      } else {
        this.send('openModal', 'modal/log_in');
      }
    },
    startCommentOnSection: function() {
      var currentUser = this.controllerFor('application').get('currentUser');
      if (currentUser) {
        this.controller.set('isCommenting', true);
        this.controller.set('isEditingPrimaryPost', false);
      } else {
        this.send('openModal', 'modal/log_in');
      }
    },
    processSectionComment: function() {
      var topic_id = this.controller.get('model.id');
      var category_id = this.controller.get('model.category_id');
      var draft = this.controller.get('model.draft');

      var replyData = {
        "raw": draft,
        "topic_id": topic_id,
        "archetype": "discette",
        "category": category_id
      };

      // if (EmberENV.useApiKeys) {
      //   // replyData.apiKey = this.get('settingsService.apiKey');
      //   // replyData.apiUsername = this.get('settingsService.apiUsername');
      //   debugger;
      // }

      var create_post_endpoint = '/posts';
      var reply = $.ajax(create_post_endpoint, {
        data: replyData,
        method: 'POST'

      });
      var that = this;
      reply.then(function(result) {
          that.controller.set('isCommenting', false);
          var comments = that.controller.get('comments');
          comments.pushObject(result);
        },
        function(error) {
          var errorMessage = "Sorry, there has been an error.";
          if (error.responseJSON && error.responseJSON.errors) {
            errorMessage = error.responseJSON.errors[0];
          }
          that.controller.set('commentServerError', errorMessage);
        });

    },
    updatePrimaryPost: function() {
      var topic_id = this.controller.get('model.id');
      var category_id = this.controller.get('model.category_id');
      var updatedPost = this.controller.get('primaryPostWithRaw.raw');

      var replyData = {
        "post": {
          "raw": updatedPost,
          "edit_reason": ""
        },
        "topic_id": topic_id,
        "archetype": "discette",
        "category": category_id
      };

      // if (EmberENV.useApiKeys) {
      //   replyData.apiKey = this.get('settingsService.apiKey');
      //   replyData.apiUsername = this.get('settingsService.apiUsername');
      // }

      var update_post_endpoint = '/posts/' + this.controller.get('primaryPost.id');
      var reply = $.ajax(update_post_endpoint, {
        data: replyData,
        method: 'PUT'

      });
      var that = this;
      reply.then(function(result) {
          that.controller.set('isEditingPrimaryPost', false);
          that.controller.set('primaryPost', result.post);
        },
        function(error) {
          var errorMessage = "Sorry, there has been an error.";
          if (error.responseJSON && error.responseJSON.errors) {
            errorMessage = error.responseJSON.errors[0];
          }
          that.controller.set('primaryPostServerError', errorMessage);
        });


    }
  },
  model: function() {
    // var sectionModel = this.modelFor('home');
    // debugger;
    var apiUrl = "/discette/about";
    // "/t/" + sectionModel.about_topic.slug + "/" + sectionModel.about_topic.id + ".json";
    var topic = $.getJSON(apiUrl).then(
      function(detailedTopic) {
        return detailedTopic;
      });
    return topic;
  },
  setupController: function(controller, model) {
    controller.set('model', model);
    controller.set('isCommenting', false);
  }
});
