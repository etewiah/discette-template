import Ember from 'ember';
import Section from '../models/section';

export default Ember.Component.extend({

  sectionUrl: function() {
    var subdomainLower = this.get('section.subdomain_lower');
    var rootDomainUrl = Section.getRootDomainUrl();
    return rootDomainUrl.replace('://', "://" + subdomainLower + ".");
  }.property('section'),
  avatarUrl: function() {
    if (this.get('sectionOwner')) {
      var rootDomainUrl = Section.getRootDomainUrl();
      var avatarUrl = rootDomainUrl + this.get('sectionOwner.avatar_template').replace(/\{size\}/g, '45');
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
  createdAt: function() {
    // TODO - fix this after I add timestamps server side
    if (this.get('sectionOwner')) {
      var createdAt = this.get('sectionOwner.created_at');
      return window.moment(createdAt).format('MMMM Do YYYY');
    }
  }.property('sectionOwner'),
  sectionOwner: function() {
    // debugger;
    // TODO: fix this:
    if (this.get('section.section_users') && this.get('section.section_users')[0]) {
      return this.get('section.section_users')[0];
    }
  }.property('section'),
});
