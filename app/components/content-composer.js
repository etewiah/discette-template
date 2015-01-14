import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save: function() {
      this.set('validate', true);
      if (this.get('content').length < this.get('minContentLength')) {
        return;
      }

      this.sendAction('save');
    },
    cancel: function() {
      this.sendAction('cancel');
    },
  },

  classNames: ['pgdn-editor'],
  btnSize: 'btn-xs',
  height: 120,
  focus: false,
  airMode: false,

  willDestroyElement: function() {
    this.$('textarea').destroy();
  },

  didInsertElement: function() {
    // var _this = this;

    this.$('textarea').pagedownBootstrap();
    var content = this.get('content') || "";
    this.set('content', content);


    // var _content = this.get('content');
    // this.$('textarea').code(_content);
    // this.$('.btn').addClass(_btnSize);
  },

  keyUp: function() {
    this.doUpdate();
  },

  click: function() {
    this.doUpdate();
  },

  doUpdate: function() {
    var content = this.$('.pgdn-textarea').val();
    this.set('content', content);
  },

  composerValidation: function() {
    if (!this.get('validate')) {
      return;
    }
    if (this.get('serverError')) {
      return Ember.Object.create({
        failed: true,
        reason: this.get('serverError')

      });
    }
    // if (Ember.empty('content')) {
    //   return Ember.Object.create({
    //     failed: true,
    //     reason: "Please enter a description."
    //   });
    // }
    // If too short
    if (this.get('content').length < this.get('minContentLength')) {
      return Ember.Object.create({
        failed: true,
        reason: "Content is too short."
      });
    }

    // Looks good!
    return Ember.Object.create({
      ok: true,
      reason: "Ok"
    });
  }.property('validate', 'content', 'serverError'),


});
