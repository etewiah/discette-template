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
  readyToAdd: function() {
    if (Ember.isBlank(this.get('topicTitle'))) {
      return false;
    } else {
      return true;
    }
  }.property('topicTitle'),

  detailsValidation: function() {
    if (!this.get('validate')) {
      return;
    };
    if (this.get('serverError')) return Discourse.InputValidation.create({
      failed: true,
      reason: this.get('serverError')

    });
    if (this.blank('topicDetails')) return Discourse.InputValidation.create({
      failed: true,
      reason: "Please enter a description."
    });
    // If too short
    if (this.get('topicDetails').length < 10) {
      return Discourse.InputValidation.create({
        failed: true,
        reason: "Has to be at least 10 characters long."
      });
    }

    // Looks good!
    return Discourse.InputValidation.create({
      ok: true,
      reason: "Ok"
    });
  }.property('validate', 'topicDetails', 'serverError'),
  titleValidation: function() {
    if (!this.get('validate')) {
      return;
    };
    if (this.blank('topicTitle')) return Discourse.InputValidation.create({
      failed: true,
      reason: "Please enter a title."
    });
    // If too short
    if (this.get('topicTitle').length < 5) {
      return Discourse.InputValidation.create({
        failed: true,
        reason: "Title has to be at least 5 characters long."
      });
    }

    // Looks good!
    return Discourse.InputValidation.create({
      ok: true,
      reason: "Ok"
    });
  }.property('validate', 'topicTitle'),

  actions: {
    // closeModal: function() {
    //   debugger;
    // },
    createNewTopic: function() {
      // if (this.get('topicTitle').length < 5 || this.get('topicDetails').length < 10) {
      //   this.set('validate', true);
      //   return;
      // }

      var firstPost = this.get('topicDetails'),
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
      	debugger;
          console.log(self);
          self.send('closeModal')
          self.transitionToRoute('topic', result.topic_id, result.topic_slug );
        },
        function(error) {
          //TODO - handle errors;
          debugger;
          self.set('serverError', error.responseJSON.errors[0]);
	        self.set('validate', true);
        });



      // // opts.action = "CREATE_TOPIC";
      // var composerModel = Discourse.Composer.create();
      // composerModel.open(opts);
      // // setting below ensures composerModel sets geo object on server after creation..
      // // composerModel.set('geo', this.get('model.currentCitySelection'));
      // // var st = composerModel.createPost()
      // // composerModel.save will call createPost on itself..
      // var self = this;
      // return composerModel.save({
      //   imageSizes: {},
      //   editReason: null
      // }).then(function(post_result) {
      //   var geo = self.get('geo') || {
      //     bounds_value: "china"
      //   };

      //   var set_geo_endpoint = '/location_posts/set_geo';
      //   var map_topic = Discourse.ajax(set_geo_endpoint, {
      //     data: {
      //       geo: geo,
      //       post_id: post_result.post.id,
      //       topic_id: post_result.post.topic_id
      //     },
      //     method: 'POST'

      //   });
      //   map_topic.then(function(set_geo_result) {
      //     // because a new category might have been created based on the location, I need to add it to
      //     // the odd categoriesById collections that discourse keeps client side
      //     var topicCategory = Discourse.Category.create(set_geo_result.category);
      //     // var categoriesById = Discourse.Site.currentProp('categoriesById');
      //     // categoriesById[topicCategory.id] = topicCategory;

      //     //       return Discourse.Category.list().findProperty('id', categoryId);
      //     //  need to do below to ensure the above line in topic model works to retrieve category
      //     var sortedCategories = Discourse.Site.currentProp('sortedCategories');
      //     sortedCategories.pushObject(topicCategory);

      //     var chattyMapUrl = "/maps/" + post_result.post.get('topic_slug');
      //     Discourse.URL.routeTo(chattyMapUrl);

      //     // Discourse.URL.routeTo(post_result.post.get('url'));

      //   });
      //   // return map_topic;


      //   self.send('closeModal');

      // }, function(error) {
      //   self.set('serverError', error);
      //   self.set('validate', true);
      // });

    }
  }

});
