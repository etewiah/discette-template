import Ember from 'ember';


export default Ember.Controller.extend({
  actions: {
    claimNewSection: function(){
      if (this.get('newSection.name').length < 2 || this.get('newSection.description').length < 10) {
        this.set('validate', true);
        return;
      }
      var create_section_endpoint = '/drive/section/create';
      var newSectionPromise = $.ajax(create_section_endpoint, {
        data: this.get('newSection'),
        method: 'POST'
      });
      var self = this;
      newSectionPromise.then(function(result) {
          window.location.pathname = '/';
          // self.transitionToRoute('home.default');
        },
        function(error) {
          // debugger;
          // self.set('serverError', error.responseJSON.errors[0]);
          var errorMessage = "Sorry, there has been an error.  Please try again later.";
          if (error.responseJSON && error.responseJSON.errors) {
            errorMessage = error.responseJSON.errors[0];
          }
          self.set('serverError', errorMessage);
        });
    },
  },
  currentSection: function() {
    var section = this.get('settingsService.currentSection');
    return section;
  }.property(),

  serverErrorValidation: function() {
    // if (!this.get('serverError')) {
    //   return;
    // }
    if (this.get('serverError')) {
      return Ember.Object.create({
        failed: true,
        reason: this.get('serverError')

      });
    }
  }.property('serverError'),

  descriptionValidation: function() {
    if (!this.get('validate')) {
      return;
    }
    if (Ember.empty('newSection.description')) {
      return Ember.Object.create({
        failed: true,
        reason: "Please enter a description."
      });
    }
    if (this.get('newSection.description').length < 10) {
      return Ember.Object.create({
        failed: true,
        reason: "Description has to be at least 10 characters long."
      });
    }
    return Ember.Object.create({
      ok: true,
      reason: "Ok"
    });
  }.property('validate', 'newSection.description'),

  nameValidation: function() {
    if (!this.get('validate')) {
      return;
    }
    if (Ember.empty('newSection.name')) {
      return Ember.Object.create({
        failed: true,
        reason: "Please enter a name."
      });
    }
    if (this.get('newSection.name').length < 2) {
      return Ember.Object.create({
        failed: true,
        reason: "Name has to be at least 2 characters long."
      });
    }
    return Ember.Object.create({
      ok: true,
      reason: "Ok"
    });
  }.property('validate', 'newSection.name'),
});
