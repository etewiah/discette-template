import Post from '../models/post';

var Topic = Ember.Object.extend({

  postModels: function() {
    var postModels = [];
    var posts = this.get('post_stream.posts');
    posts.forEach(function(postJSON) {
      var postModel = Post.create(postJSON);
      postModels.pushObject(postModel);
      }
    );
    return postModels;
  }.property('post_stream.posts'),
  // createOnServer: function(complete, error) {
  //   var data = JSON.parse(JSON.stringify(this) );
  //   var create_discette_endpoint = '/drive/admin/discette';
  //   return $.ajax(create_discette_endpoint, {
  //     type: 'POST',
  //     dataType: 'json',
  //     data: data
  //   }).then(function(result) {
  //     if (complete) {
  //       complete(result);
  //     }
  //   }, function(result) {
  //     if (error) {
  //       error(result);
  //     }
  //   });
  // },

  // destroyOnServer: function(complete, error) {
  //   var self = this;
  //   var delete_discette_endpoint = '/drive/admin/discette/' + this.id;

  //   return $.ajax(delete_discette_endpoint, {
  //     type: 'DELETE'
  //   }).then(function(result) {
  //     if (complete) {
  //       complete(result);
  //     }
  //   }, function(result) {
  //     if (error) {
  //       error(result);
  //     }
  //   });
  // }
});


export default Topic;
