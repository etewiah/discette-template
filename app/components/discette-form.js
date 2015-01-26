import Ember from 'ember';
import Discette from '../models/discette';

export default Ember.Component.extend({
  validate: false,
  actions: {
    createDiscette: function() {
      if (this.get('discette.name').length < 3) {
        this.set('validate', true);
        return;
      }
      var discetteModel = this.get('discette');
      var self = this;
      discetteModel.createOnServer(function(result) {
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
    updateDiscette: function() {
      if (this.get('discette.name').length < 3) {
        this.set('validate', true);
        return;
      }
      var discetteJSON = this.get('discette');
      var discetteModel = Discette.create(discetteJSON);
      debugger;
      var self = this;
      discetteModel.updateOnServer(function(result) {
          self.set('successMessage', "discette updated successfully.");
          self.set('validate', false);
          // self.transitionToRoute('drive-admin.discettes.details', result.id);
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
    if (Ember.empty('discette.name')) {
      return Ember.Object.create({
        failed: true,
        reason: "Please enter a name."
      });
    }
    if (this.get('discette.name').length < 3) {
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
  }.property('validate', 'discette.name'),

  // usernameUrl: function() {
  //   if (this.get('discetteOwner')) {
  //     var usernameUrl = "/users/" + this.get('discetteOwner.username');
  //     return usernameUrl;
  //   }
  // }.property('discetteOwner'),
  // createdAt: function() {
  //   // TODO - fix this after I add timestamps server side
  //   if (this.get('discetteOwner')) {
  //     var createdAt = this.get('discetteOwner.created_at');
  //     return window.moment(createdAt).format('MMMM Do YYYY');
  //   }
  // }.property('discetteOwner'),
  // discetteOwner: function() {
  //   // TODO: fix this:
  //   if (this.get('discette.discette_users') && this.get('discette.discette_users')[0]) {
  //     return this.get('discette.discette_users')[0];
  //   }
  // }.property('discette'),
});
