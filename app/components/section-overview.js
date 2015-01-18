import Ember from 'ember';

export default Ember.Component.extend({

  sectionUrl: function() {
    var subdomainLower = this.get('section.subdomain_lower');
    return this.get('currentSection.root_url').replace('://',"://" + subdomainLower + ".")
    // return  + ".klavado.com"
  }.property('section'),
  // avatarUrl: function(){
  //   var avatarUrl = "http://klavado.com" + this.post.avatar_template.replace(/\{size\}/g, '45');
  //   //uploads/default/_optimized/8cf/c03/e2885952b7_45x45.JPG"; 
  //   return avatarUrl;
  // }.property('value'),
  avatarUrl: function() {
    if (this.get('sectionOwner')) {
      var avatarUrl = this.get('currentSection.root_url') + this.get('sectionOwner.avatar_template').replace(/\{size\}/g, '45');
      // "/users/" + this.get('sectionOwner.username');
      return avatarUrl;
    }
  }.property('sectionOwner'),
  usernameUrl: function() {
    if (this.get('sectionOwner')) {
      var usernameUrl = "/users/" + this.get('sectionOwner.username');
      return usernameUrl;
    }
  }.property('sectionOwner'),
  sectionOwner: function() {
    if (this.get('section.section_users')[0]) {
      return this.get('section.section_users')[0];
    }
  }.property('section'),
});
