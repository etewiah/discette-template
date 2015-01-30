import Ember from 'ember';
import Section from '../models/section';

export default Ember.Component.extend({
  validate: false,
  actions: {
    deleteSection: function() {
      var confirmationObject = Ember.Object.create({
        displayText: "Are you sure you want to delete this section?"
      });
      confirmationObject.reopen({
        confirm: function(modal) {
          var sectionModel = this.get('section');
          var self = this;
          sectionModel.destroyOnServer(function(result) {
              modal.send('closeModal');
              self.sendAction('onDeleteSuccessAction', result);
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
      this.sendAction('openModalAction', 'modal/confirm-action', confirmationObject);
    },
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
      // var sectionJSON = this.get('section');
      var sectionModel = this.get('section');
      // Section.create(sectionJSON);
      debugger;
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

  currentDiscette: function() {
    var discettes = this.get('discettes');
    if (discettes) {
      var currentDiscette = discettes.findBy('id', this.get('section.discette_id'));
      return currentDiscette;
    }
  }.property('section.discette_id', 'discettes'),
  createdAt: function() {
    // TODO - fix this after I add timestamps server side
    if (this.get('sectionOwner')) {
      var createdAt = this.get('sectionOwner.created_at');
      return window.moment(createdAt).format('MMMM Do YYYY');
    }
  }.property('sectionOwner'),
  // sectionOwner: function() {
  //   // TODO: fix this:
  //   if (this.get('section.section_users') && this.get('section.section_users')[0]) {
  //     return this.get('section.section_users')[0];
  //   }
  // }.property('section'),
});
