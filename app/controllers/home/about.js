import Ember from 'ember';
import Post from '../../models/post';

export default Ember.Controller.extend({
  primaryPost: function() {
    return this.get('model.topic.post_stream.posts.firstObject');
  }.property('model'),
  comments: function() {
    var postModels = [];
    var posts = this.get('model.topic.post_stream.posts');
    posts.forEach(function(postJSON) {
      if (postJSON.post_number !== 1) {

        var postModel = Post.create(postJSON);
        postModels.pushObject(postModel);
      }
    });
    return postModels;
  }.property('model.topic.post_stream.posts')
});
