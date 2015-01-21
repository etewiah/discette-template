import ModalController from '../modal';
import Post from '../../models/post';

export default ModalController.extend({
  actions: {
    updatePost: function(complete, error) {
      var post = this.model;
      var self = this;
      post.save(function(result) {
        // server does not return raw when it saves which makes it difficult to edit
        // a second time without this
          // result.raw = self.model.raw.valueOf();
          self.set('model.cooked', result.cooked);
          // self.set('model', Post.create(result));
          self.send('closeModal');
        },
        function(error) {
          debugger;
          // self.set('serverError', error.responseJSON.errors[0]);
          var errorMessage = "Sorry, there has been an error.";
          if (error.responseJSON && error.responseJSON.errors) {
            errorMessage = error.responseJSON.errors[0];
          }
          self.flash(errorMessage, 'error');
          self.set('validate', false);
        }
      );

    }
  }
});
