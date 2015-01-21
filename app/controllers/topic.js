import Ember from 'ember';
import Post from '../models/post';


export default Ember.Controller.extend({
  postModels: function() {
    var postModels = [];
    var posts = this.get('model.post_stream.posts');
    posts.forEach(function(postJSON) {
      var postModel = Post.create(postJSON);
      postModels.pushObject(postModel);
      }
    );
    return postModels;
  }.property('model.post_stream.posts'),
});
