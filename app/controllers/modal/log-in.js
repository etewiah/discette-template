import ModalController from '../modal';
var LogInController;

LogInController = ModalController.extend({
  actions: {
    confirm: function() {
      alert('OK, it will be done!');
      return this.send('closeModal');
    }
  }
});

export default LogInController;