import Ember from 'ember';
import Section from '../models/section';
import User from '../models/user';

export default Ember.Object.extend({
	 currentUser: function() {
    var userJson = PreloadStore.get('currentUser');
     // this.get('settingsService.currentSection.rootUrl');
    // PreloadStore.get('discetteSettings.rootDomainBaseUrl') || 'http://klavado.com';
    if (userJson) {
    // TODO: fix below
      userJson.rootUrl = 'http://klavado.com';
      return User.create(userJson);
    }
    return null;
  }.property(),
	currentSection: function(){
		var sectionModel = Section.create(PreloadStore.get('currentSection'));
		return sectionModel;
	}.property()
});
