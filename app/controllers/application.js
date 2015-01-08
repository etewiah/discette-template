import Ember from 'ember';

export default Ember.Controller.extend({
	 currentUser: function() {
    var userJson = PreloadStore.get('currentUser');
    var rootDomainBaseUrl = PreloadStore.get('discetteSettings.rootDomainBaseUrl') || 'http://klavado.com';
    if (userJson) {
      userJson.avatarUrl = rootDomainBaseUrl + userJson.avatar_template.replace(/\{size\}/g, '32');
      return userJson;
      // return Discourse.User.create(userJson);
    }
    return null;
  }.property(),
});
