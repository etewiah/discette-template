import Ember from 'ember';
import Section from '../models/section';

export default Ember.Component.extend({
  validate: false,
  actions: {
    createSection: function() {
      if (this.get('section.name').length < 3) {
        this.set('validate', true);
        return;
      }
      var sectionModel = this.get('section');
      // var sectionModel = Section.create(sectionJSON);
      var self = this;
      sectionModel.createOnServer(function(result) {
          self.sendAction('onCreateSuccessAction', result);
        },
        function(error) {
          // self.set('serverError', error.responseJSON.errors[0]);
          var errorMessage = "Sorry, there has been an error.";
          if (error.responseJSON && error.responseJSON.errors) {
            errorMessage = error.responseJSON.errors[0];
          }
          self.set('serverError', errorMessage);
          self.set('validate', false);
        }
      );
    },
    updateSection: function() {
      if (this.get('section.name').length < 3) {
        this.set('validate', true);
        return;
      }
      var sectionJSON = this.get('section');
      var sectionModel = Section.create(sectionJSON);
      var self = this;
      sectionModel.updateOnServer(function(result) {
          self.set('successMessage', "section updated successfully.");
          self.set('validate', false);
          // self.transitionToRoute('drive-admin.sections.details', result.id);
        },
        function(error) {
          // self.set('serverError', error.responseJSON.errors[0]);
          var errorMessage = "Sorry, there has been an error.";
          if (error.responseJSON && error.responseJSON.errors) {
            errorMessage = error.responseJSON.errors[0];
          }
          self.set('serverError', errorMessage);
          self.set('validate', false);
        }
      );
    }
  },
  nameValidation: function() {
    if (!this.get('validate')) {
      return;
    }
    if (Ember.empty('section.name')) {
      return Ember.Object.create({
        failed: true,
        reason: "Please enter a name."
      });
    }
    if (this.get('section.name').length < 3) {
      return Ember.Object.create({
        failed: true,
        reason: "Name has to be at least 3 characters long."
      });
    }

    // Looks good!
    return Ember.Object.create({
      ok: true,
      reason: "Ok"
    });
  }.property('validate', 'section.name'),
  // sectionUrl: function() {
  //   var subdomainLower = this.get('section.subdomain_lower');
  //   return this.get('currentSection.root_url').replace('://',"://" + subdomainLower + ".");
  // }.property('section'),
  // avatarUrl: function() {
  //   if (this.get('sectionOwner')) {
  //     var avatarUrl = this.get('currentSection.root_url') + this.get('sectionOwner.avatar_template').replace(/\{size\}/g, '45');
  //     // "/users/" + this.get('sectionOwner.username');
  //     return avatarUrl;
  //   }
  // }.property('sectionOwner'),
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
    // TODO: fix this:
    if (this.get('section.section_users') && this.get('section.section_users')[0]) {
      return this.get('section.section_users')[0];
    }
  }.property('section'),
});
