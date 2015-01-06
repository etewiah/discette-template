import Ember from 'ember';

export default Ember.Component.extend({


  avatarUrl: function(){
    var avatarUrl = "http://klavado.com" + this.post.avatar_template.replace(/\{size\}/g, '45');
    //uploads/default/_optimized/8cf/c03/e2885952b7_45x45.JPG"; 
    return avatarUrl;
  }.property('value'),
  usernameUrl: function(){
    var usernameUrl = "/users/" + this.post.username;
    //uploads/default/_optimized/8cf/c03/e2885952b7_45x45.JPG"; 
    return usernameUrl;
  }.property('value'),
});
