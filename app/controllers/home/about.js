import Ember from 'ember';


export default Ember.Controller.extend({
  primaryPost: function() {
    return this.get('model.post_stream.posts.firstObject');
  }.property('model'),
  comments: function() {
    var comments = [];
    var allPosts = this.get('model.post_stream.posts');
    allPosts.forEach(function(post){
      if (post.post_number !== 1) {
        comments.push(post);
      }
    })
    return comments;
  }.property('model')
});
