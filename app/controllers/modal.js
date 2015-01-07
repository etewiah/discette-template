import Ember from 'ember';
var ModalController;

ModalController = Ember.Controller.extend({
	// if I use ObjectController as below, get errors about setting content on proxy..
	// ModalController = Ember.ObjectController.extend({
  actions: {
    cancel: function() {
      if (this.content) {
        this.content.rollback();
      }
      return this.send('closeModal');
    }
  },
  flash: function(message, messageClass) {
    this.set('flashMessage', Em.Object.create({
      message: message,
      messageClass: messageClass
    }));
  }
});

export default ModalController;