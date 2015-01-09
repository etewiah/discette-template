import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    startNewTopic: function() {
      this.send('openModal', 'modal/new_topic');
    },
    // processNewTopic: function() {
    //   debugger;
    //   this.controller.set('isEditing', false);
    //   var topic_id = this.controller.get('model.id');
    //   var category_id = this.controller.get('model.category_id');
    //   var draft = this.controller.get('model.draft');
    //   var apiKey = this.get('settingsService.apiKey');
    //   var apiUsername = this.get('settingsService.apiUsername');

    //   var create_post_endpoint = '/posts';
    //   var reply = $.ajax(create_post_endpoint, {
    //     data: {
    //       "api_key": apiKey,
    //       "api_username": apiUsername,
    //       "raw": draft,
    //       "topic_id": topic_id,
    //       "archetype": "regular",
    //       "category": category_id
    //     },
    //     method: 'POST'

    //   });
    //   var that = this;
    //   reply.then(function(result) {
    //     // console.log(that);
    //     var postStream = that.controller.get('model.post_stream');
    //     postStream.posts.pushObject(result);
    //   },
    //   function(error){
    //     //TODO - handle errors;
    //     // debugger;
    //   });

    // }
  },
  model: function(params) {
  	// if (PreloadStore.data.discette_topics) {
  	// 	return PreloadStore.data.discette_topics;
  	// }
    var apiUrl = "discette_topics";
    // "/api/topics";
    var topics = $.getJSON(apiUrl).then(
      function(result) {
        return result.discette_topics;
      });
    return topics;
  },
  setupController: function(controller, model) {
    controller.set('model', model);
  }
});
