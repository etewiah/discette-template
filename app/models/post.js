// not quite sure how I'd get a ref to this same base obj
// import PostObject from './post';

var Post = Ember.Object.extend({
  // cookedChanged: function() {
  //   debugger;
  // }.observes('cooked'),
  cookedContent: function() {
    return this.get('cooked');
  }.property('cooked'),
  destroy: function(complete, error) {
    var self = this;

    // return Discourse.ajax("/posts/" + this.get('id'), {
    //   data: { context: window.location.pathname },
    //   type: 'DELETE'
    // });

    return $.ajax("/posts/" + (this.get('id')), {
      type: 'DELETE',
      dataType: 'json'
    }).then(function(result) {
      if (complete) {
        complete(result);
      }
    }, function(result) {
      // seems to get here on success...
      if (result.status === 200) {
        if (complete) {
          complete(result);
        }
      } else {
        if (error) {
          error(result);
        }
      }
    });


  },
  save: function(complete, error) {
    // var tt = PostObject.create({});
    // debugger;

    var self = this;
    if (!this.get('newPost')) {

      // We're updating a post
      return $.ajax("/posts/" + (this.get('id')), {
        type: 'PUT',
        dataType: 'json',
        data: {
          post: {
            raw: this.get('raw'),
            edit_reason: this.get('editReason')
          },
          image_sizes: this.get('imageSizes')
        }
      }).then(function(result) {
        // If we received a category update, update it
        self.set('version', result.post.version);
        // if (result.category) Discourse.Site.current().updateCategory(result.category);
        // if (complete) complete(PostObject.create(result.post))
        // not quite sure how I'd get a ref to this same base obj to use above
        if (complete) {
          complete(result.post);
        }
      }, function(result) {
        // Post failed to update
        if (error) {
          error(result);
        }
      });


    } else {

      // We're saving a post
      // var data = this.getProperties(Discourse.Composer.serializedFieldsForCreate());
      // data.reply_to_post_number = this.get('reply_to_post_number');
      // data.image_sizes = this.get('imageSizes');

      // var metaData = this.get('metaData');
      // // Put the metaData into the request
      // if (metaData) {
      //   data.meta_data = {};
      //   Ember.keys(metaData).forEach(function(key) {
      //     data.meta_data[key] = metaData.get(key);
      //   });
      // }

      // return Discourse.ajax("/posts", {
      //   type: 'POST',
      //   data: data
      // }).then(function(result) {
      //   // Post created
      //   if (complete) complete(Discourse.Post.create(result));
      // }, function(result) {
      //   // Failed to create a post
      //   if (error) error(result);
      // });
    }
  }
});

export default Post;
