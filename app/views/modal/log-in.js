import ModalView from '../modal';
var LogInModalView;

LogInModalView = ModalView.extend({
  // mouseMove: function(e) {
  //   this.set('controller.lastX', e.screenX);
  //   this.set('controller.lastY', e.screenY);
  // },

  _setup: function() {
    var loginController = this.get('controller');

    // Get username and password from the browser's password manager,
    // if it filled the hidden static login form:
    loginController.set('loginName', $('#hidden-login-form input[name=username]').val());
    loginController.set('loginPassword', $('#hidden-login-form input[name=password]').val());

    Em.run.schedule('afterRender', function() {
      $('#login-account-password, #login-account-name').keydown(function(e) {
        if (e.keyCode === 13) {
          if (!loginController.get('loginDisabled')) {
            loginController.send('login');
          }
        }
      });
    });
  }.on('didInsertElement')


});

export default LogInModalView;