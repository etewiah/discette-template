import Ember from 'ember';


export default Ember.Controller.extend({
  // TODO - get below from settings service like I do with currentSection
  // currentUser: function() {
  //   var userJson = PreloadStore.get('currentUser');
  //   var rootDomainBaseUrl = this.get('settingsService.currentSection.rootUrl');
  //   // PreloadStore.get('discetteSettings.rootDomainBaseUrl') || 'http://klavado.com';
  //   if (userJson) {
  //     userJson.avatarUrl = rootDomainBaseUrl + userJson.avatar_template.replace(/\{size\}/g, '32');
  //     return userJson;
  //     // return Discourse.User.create(userJson);
  //   }
  //   return null;
  // }.property(),
  // below gets passed to discette-header component to be used for displaying section title
  currentSection: function() {
    var section = this.get('settingsService.currentSection');
    return section;
  }.property(),
  currentUser: function() {
    var section = this.get('settingsService.currentUser');
    return section;
  }.property()
});
