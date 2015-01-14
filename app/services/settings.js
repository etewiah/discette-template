import Ember from 'ember';
import Section from '../models/section';

export default Ember.Object.extend({
	// currentUser: function(){
	// 	return PreloadStore.get('currentUser');
	// },
	currentSection: function(){
		var sectionModel = Section.create(PreloadStore.get('currentSection'));
		return sectionModel;
	}.property()
	// rootDomainBaseUrl: function(){
	// 	return PreloadStore.get('discetteSettings.rootDomainBaseUrl') || 'http://klavado.com';
	// }
});
