import ModalController from '../modal';
// import Ember from 'ember';

export default ModalController.extend({
  needs: ['home'],

  // onShow: function() {
  //   var defaultGeo = {
  //     bounds_value: "spain"
  //   }
  //   this.set('geo', defaultGeo);
  // },
  firstPost: "",
  topicTitle: "",
  readyToAdd: function() {
    if (Ember.isBlank(this.get('topicTitle'))) {
      return false;
    } else {
      return true;
    }
  }.property('topicTitle'),

  firstPostValidation: function() {
    if (!this.get('validate')) {
      return;
    }
    if (this.get('serverError')) {
      return Ember.Object.create({
        failed: true,
        reason: this.get('serverError')

      });
    }
    if (Ember.empty('firstPost')) {
      return Ember.Object.create({
        failed: true,
        reason: "Please enter a description."
      });
    }
    // If too short
    if (this.get('firstPost').length < 15) {
      return Ember.Object.create({
        failed: true,
        reason: "Has to be at least 15 characters long."
      });
    }

    // Looks good!
    return Ember.Object.create({
      ok: true,
      reason: "Ok"
    });
  }.property('validate', 'firstPost', 'serverError'),
  titleValidation: function() {
    if (!this.get('validate')) {
      return;
    }
    if (Ember.empty('topicTitle')) {
      return Ember.Object.create({
        failed: true,
        reason: "Please enter a title."
      });
    }
    if (this.get('topicTitle').length < 5) {
      return Ember.Object.create({
        failed: true,
        reason: "Title has to be at least 5 characters long."
      });
    }

    // Looks good!
    return Ember.Object.create({
      ok: true,
      reason: "Ok"
    });
  }.property('validate', 'topicTitle'),

  actions: {
    // closeModal: function() {
    //   debugger;
    // },
    createNewTopic: function() {
      if (this.get('topicTitle').length < 5 || this.get('firstPost').length < 15) {
        this.set('validate', true);
        return;
      }

      var firstPost = this.get('firstPost'),
        title = this.get('topicTitle'),
        categoryId = this.get('settingsService.currentSection.category_id');
        // this.get('controllers.home.category.id');

      var newTopicData = {
        "archetype": "discette",
        "raw": firstPost,
        "title": title,
        "category": categoryId
      };

      // if (EmberENV.useApiKeys) {
      //   newTopicData.apiKey = this.get('settingsService.apiKey');
      //   newTopicData.apiUsername = this.get('settingsService.apiUsername');
      // }

      var create_post_endpoint = '/posts';
      var firstPostResult = $.ajax(create_post_endpoint, {
        data: newTopicData,
        method: 'POST'
      });
      var self = this;
      firstPostResult.then(function(result) {
          self.send('closeModal');
          self.transitionToRoute('topic', result.topic_id, result.topic_slug);
        },
        function(error) {
          // debugger;
          // self.set('serverError', error.responseJSON.errors[0]);
          var errorMessage = "Sorry, there has been an error.";
          if (error.responseJSON && error.responseJSON.errors) {
            errorMessage = error.responseJSON.errors[0];
          }
          self.flash(errorMessage, 'error');
          self.set('validate', false);
        });

    }
  }

});
