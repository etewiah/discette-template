import Ember from 'ember';

var originalZIndex;

export default Ember.Component.extend({
  actions: {
    showSignUp: function() {
      //setting this cookie ensures I will be redirected here after signup
      $.cookie('destination_url', location.href );
      var rootDomainBaseUrl = PreloadStore.get('discetteSettings.rootDomainBaseUrl') || 'http://klavado.com';
      window.location = rootDomainBaseUrl + "/signup";
    },
    showLogIn: function() {
      // this.controllerFor('modal/add_site').set('model', this.controller.model);
      this.sendAction('openModal', 'modal/log_in');
    },
    logout: function() {
      // Discourse.logout();
      return false;
    }
  },
  currentUser: function() {
    var userJson = PreloadStore.get('currentUser');
    if (userJson) {
      userJson.avatarUrl = "http://klavado.com" + userJson.avatar_template.replace(/\{size\}/g, '32');
      return userJson;
      // return Discourse.User.create(userJson);
    }
    return null;
  }.property(),
  didInsertElement: function() {

    var self = this;

    this.$('a[data-dropdown]').on('click.dropdown', function(e) {
      self.showDropdown.apply(self, [$(e.currentTarget)]);
      return false;
    });
  },
  renderDropdowns: false,

  showDropdown: function($target) {
    var self = this;
    if (!this.get("renderDropdowns")) {
      this.set("renderDropdowns", true);
      Em.run.next(function() {
        self.showDropdown($target);
      });
      return;
    }

    var elementId = $target.data('dropdown') || $target.data('notifications'),
      $dropdown = $("#" + elementId),
      $li = $target.closest('li'),
      $ul = $target.closest('ul'),
      $html = $('html'),
      $header = $('header'),
      replyZIndex = parseInt($('#reply-control').css('z-index'), 10);


    originalZIndex = originalZIndex || $('header').css('z-index');

    if (replyZIndex > 0) {
      $header.css("z-index", replyZIndex + 1);
    }

    var controller = self.get('controller');
    if (controller && !controller.isDestroyed) {
      controller.set('visibleDropdown', elementId);
    }
    // we need to ensure we are rendered,
    //  this optimises the speed of the initial render
    var render = $target.data('render');
    if (render) {
      if (!this.get(render)) {
        this.set(render, true);
        Em.run.next(this, function() {
          this.showDropdown.apply(self, [$target]);
        });
        return;
      }
    }

    var hideDropdown = function() {
      $header.css("z-index", originalZIndex);
      $dropdown.fadeOut('fast');
      $li.removeClass('active');
      $html.data('hide-dropdown', null);
      var controller = self.get('controller');
      if (controller && !controller.isDestroyed) {
        controller.set('visibleDropdown', null);
      }
      return $html.off('click.d-dropdown');
    };
    // if a dropdown is active and the user clicks on it, close it
    if ($li.hasClass('active')) {
      return hideDropdown();
    }
    // otherwhise, mark it as active
    $li.addClass('active');
    // hide the other dropdowns
    $('li', $ul).not($li).removeClass('active');
    $('.d-dropdown').not($dropdown).fadeOut('fast');
    // fade it fast
    $dropdown.fadeIn('fast');
    // autofocus any text input field
    $dropdown.find('input[type=text]').focus().select();

    $html.on('click.d-dropdown', function(e) {
      return $(e.target).closest('.d-dropdown').length > 0 ? true : hideDropdown.apply(self);
    });

    $html.data('hide-dropdown', hideDropdown);

    return false;
  }
});
