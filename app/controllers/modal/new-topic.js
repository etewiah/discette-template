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
    };
    if (this.get('serverError')) return Ember.Object.create({
      failed: true,
      reason: this.get('serverError')

    });
    if (Ember.empty('firstPost')) return Ember.Object.create({
      failed: true,
      reason: "Please enter a description."
    });
    // If too short
    if (this.get('firstPost').length < 10) {
      return Ember.Object.create({
        failed: true,
        reason: "Has to be at least 10 characters long."
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
    };
    if (Ember.empty('topicTitle')) return Ember.Object.create({
      failed: true,
      reason: "Please enter a title."
    });
    // If too short
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
      if (this.get('topicTitle').length < 5 || this.get('firstPost').length < 10) {
        this.set('validate', true);
        return;
      }

      var firstPost = this.get('firstPost'),
        title = this.get('topicTitle'),
        categoryId = this.get('controllers.home.model.firstObject.category_id');

      var apiKey = this.get('settingsService.apiKey');
      var apiUsername = this.get('settingsService.apiUsername');


      var create_post_endpoint = '/posts';
      var firstPost = $.ajax(create_post_endpoint, {
        data: {
          "api_key": apiKey,
          "api_username": apiUsername,
          "archetype": "regular",
          "raw": firstPost,
          "title": title,
          "category": categoryId
        },
        method: 'POST'

      });
      var self = this;
      firstPost.then(function(result) {
          self.send('closeModal')
          self.transitionToRoute('topic', result.topic_id, result.topic_slug );
        },
        function(error) {
          // debugger;
          self.set('serverError', error.responseJSON.errors[0]);
          self.flash(error.responseJSON.errors[0], 'error');
	        self.set('validate', false);
        });

    }
  }

});
