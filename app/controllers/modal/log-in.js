import ModalController from '../modal';
var LogInController;

LogInController = ModalController.extend({
  actions: {
    login: function() {
      var self = this;
      var loginName = this.get('loginName');
      var loginPassword = this.get('loginPassword');

      if (Ember.empty(loginName) || Ember.empty(loginPassword)) {
        self.flash('Please enter a username and password', 'error');
        return;
      }

      this.set('loggingIn', true);

      $.ajax("/session", {
        data: {
          login: loginName,
          password: loginPassword
        },
        type: 'POST'
      }).then(function(result) {
        // Successful login
        if (result.error) {
          // self.set('loggingIn', false);
          // if( result.reason === 'not_activated' ) {
          //   self.send('showNotActivated', {
          //     username: self.get('loginName'),
          //     sentTo: result.sent_to_email,
          //     currentEmail: result.current_email
          //   });
          // }
          self.flash(result.error, 'error');
        } else {
          // self.set('loggedIn', true);
          // Trigger the browser's password manager using the hidden static login form:
          var $hidden_login_form = $('#hidden-login-form');
          // var destinationUrl = $.cookie('destination_url');
          $hidden_login_form.find('input[name=username]').val(self.get('loginName'));
          $hidden_login_form.find('input[name=password]').val(self.get('loginPassword'));
          // if (self.get('loginRequired') && destinationUrl) {
          //   // redirect client to the original URL
          //   $.cookie('destination_url', null);
          //   $hidden_login_form.find('input[name=redirect]').val(destinationUrl);
          // } else {
          //   $hidden_login_form.find('input[name=redirect]').val(window.location.href);
          // }
          $hidden_login_form.find('input[name=redirect]').val(window.location.href);
          $hidden_login_form.submit();
        }

      }, function() {
        // Failed to login
        self.flash('Sorry, there has been an error', 'error');
        self.set('loggingIn', false);
      });

      return false;
    },

    externalLogin: function(loginMethod){
      debugger;
      var name = loginMethod.get("name");
      var customLogin = loginMethod.get("customLogin");

      if(customLogin){
        customLogin();
      } else {
        this.set('authenticate', name);
        var left = this.get('lastX') - 400;
        var top = this.get('lastY') - 200;

        var height = loginMethod.get("frameHeight") || 400;
        var width = loginMethod.get("frameWidth") || 800;

        // TODO: get from singleton:
        var authUrl =  "http://klavado.com/auth/" + name; 
        // Discourse.getURL("/auth/" + name)

        var w = window.open(authUrl, "_blank",
            "menubar=no,status=no,height=" + height + ",width=" + width +  ",left=" + left + ",top=" + top);
        var self = this;
        var timer = setInterval(function() {
          if(!w || w.closed) {
            debugger;
            clearInterval(timer);
            self.set('authenticate', null);
          }
        }, 1000);
      }
    },

    createAccount: function() {
      var createAccountController = this.get('controllers.createAccount');
      createAccountController.resetForm();
      this.send('showCreateAccount');
    }
  },

  loginButtons: function() {
    var methods = Ember.A();
    var githubParams = {
      name: "github",
      title: "with GitHub",
      message: "github message"
    };
    var googleOauth2Params = {
      name: "google",
      title: "with Google",
      message: "google message",
      frameWidth: 850,
      frameHeight: 500
    };
    var facebookParams = {
      name: "facebook",
      title: "with Facebook",
      message: "facebook message",
      frameHeight: 450
    };

    [ githubParams,
      googleOauth2Params,
      facebookParams
      // "facebook",
      // "cas",
      // "twitter",
      // "yahoo",
    ].forEach(function(params) {
        // methods.pushObject(Discourse.LoginMethod.create(params));
        methods.pushObject(Ember.Object.create(params));
    });

  return methods;
}.property(),
// authMessage: (function() {
//   if (this.blank('authenticate')) return "";
//   var method = Discourse.get('LoginMethod.all').findProperty("name", this.get("authenticate"));
//   if(method){
//     return method.get('message');
//   }
// }).property('authenticate'),

authenticationComplete: function(options) {
  // if (options.requires_invite) {
  //   this.send('showLogin');
  //   this.flash(I18n.t('login.requires_invite'), 'success');
  //   this.set('authenticate', null);
  //   return;
  // }
  // if (options.awaiting_approval) {
  //   this.send('showLogin');
  //   this.flash(I18n.t('login.awaiting_approval'), 'success');
  //   this.set('authenticate', null);
  //   return;
  // }
  // if (options.awaiting_activation) {
  //   this.send('showLogin');
  //   this.flash(I18n.t('login.awaiting_confirmation'), 'success');
  //   this.set('authenticate', null);
  //   return;
  // }
  // if (options.not_allowed_from_ip_address) {
  //   this.send('showLogin');
  //   this.flash(I18n.t('login.not_allowed_from_ip_address'), 'success');
  //   this.set('authenticate', null);
  //   return;
  // }
  // Reload the page if we're authenticated
  if (options.authenticated) {
    // TODO - implement logic like below:
    // if (window.location.pathname === Discourse.getURL('/login')) {
    //   window.location.pathname = Discourse.getURL('/');
    // } else {
    //   window.location.reload();
    // }
    window.location.pathname = '/';
    return;
  }

  var createAccountController = this.get('controllers.createAccount');
  createAccountController.setProperties({
    accountEmail: options.email,
    accountUsername: options.username,
    accountName: options.name,
    authOptions: Em.Object.create(options)
  });
  this.send('showCreateAccount');
}
});

export default LogInController;
