import Ember from 'ember';
import Post from '../models/post';

export default Ember.Component.extend({
  isVisible: true,
  actions: {
    startDeletingPost: function() {
      var confirmationObject = Ember.Object.create({
        displayText: "Are you sure you want to delete this post?"
      });
      confirmationObject.reopen({
        confirm: function(modal) {
          var postModel = this.get('postModel');
          var self = this;
          postModel.destroy(function(result) {
              modal.send('closeModal');
              self.set('isVisible', false);
            },
            function(error) {
              var errorMessage = "Sorry, there has been an error.";
              if (error.responseJSON && error.responseJSON.errors) {
                errorMessage = error.responseJSON.errors[0];
              }
              modal.flash(errorMessage, 'error');
              modal.set('validate', false);
            }
          );
        }.bind(this)
      });
      // debugger;
      this.sendAction('openModalAction', 'modal/confirm-action', confirmationObject);
    },
    startEditingPost: function() {
      // this.controllerFor('modal/edit_post').set('model', this.postModel);
      // passing a model below means it gets set as the modal's model
      this.sendAction('openModalAction', 'modal/edit-post', this.get('postModel'));
    }
  },
  longCreatedAt: function() {
    return moment(this.postModel.created_at).format('MMMM Do YYYY, h:mm:ss a');
  }.property(),
  avatarUrl: function() {
    var avatarUrl = "http://klavado.com" + this.postModel.avatar_template.replace(/\{size\}/g, '45');
    //uploads/default/_optimized/8cf/c03/e2885952b7_45x45.JPG"; 
    return avatarUrl;
  }.property('post'),
  usernameUrl: function() {
      var usernameUrl = "/users/" + this.postModel.username;
      //uploads/default/_optimized/8cf/c03/e2885952b7_45x45.JPG"; 
      return usernameUrl;
    }.property('post')
    // postModel: function(){
    //   debugger;
    //   return Post.create(this.postModel);
    // }.property('post')
});
