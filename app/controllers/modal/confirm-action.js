import ModalController from '../modal';
import Post from '../../models/post';

export default ModalController.extend({
  actions: {
    confirmedAction: function(complete, error) {
      var confirmationObject = this.get('model');
      // call the confirm action on the object thats passed in
      confirmationObject.confirm(this);
    }
  }
});
