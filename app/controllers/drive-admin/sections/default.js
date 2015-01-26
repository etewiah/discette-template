import Ember from 'ember';
// import Section from '../../../models/section';


export default Ember.Controller.extend({
  // needs: ['drive-admin'],
  // newSection: {},
  // nameValidation: function() {
  //   if (!this.get('validate')) {
  //     return;
  //   }
  //   if (Ember.empty('newSection.name')) {
  //     return Ember.Object.create({
  //       failed: true,
  //       reason: "Please enter a name."
  //     });
  //   }
  //   if (this.get('newSection.name').length < 3) {
  //     return Ember.Object.create({
  //       failed: true,
  //       reason: "Name has to be at least 3 characters long."
  //     });
  //   }

  //   // Looks good!
  //   return Ember.Object.create({
  //     ok: true,
  //     reason: "Ok"
  //   });
  // }.property('validate', 'newSection.name'),
  // actions: {
  //   createNewSection: function() {
  //     if (this.get('newSection.name').length < 3) {
  //       this.set('validate', true);
  //       return;
  //     }
  //     var sectionJSON = this.get('newSection');
  //     var sectionModel = Section.create(sectionJSON);
  //     var self = this;
  //     sectionModel.saveNew(function(result) {
  //         debugger;
  //         self.transitionToRoute('drive-admin.sections.details', result.id );
  //       },
  //       function(error) {
  //         // self.set('serverError', error.responseJSON.errors[0]);
  //         var errorMessage = "Sorry, there has been an error.";
  //         if (error.responseJSON && error.responseJSON.errors) {
  //           errorMessage = error.responseJSON.errors[0];
  //         }
  //         self.set('serverError', errorMessage);
  //         self.set('validate', false);
  //       }
  //     );

  //   },
  // }
});

