import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    showSignUp: function() {
      debugger;
    }
  },
  currentUser: function() {
    var userJson = PreloadStore.get('currentUser');
    if (userJson) {
    	userJson.avatarUrl = "http://klavado.com" + userJson.avatar_template.replace(/\{size\}/g, '32');
    	return userJson;
      // return Discourse.User.create(userJson);
    }
    return null;
  }.property()
});
