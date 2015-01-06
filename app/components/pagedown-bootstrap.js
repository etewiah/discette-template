import Ember from 'ember';

export default Ember.Component.extend({

  classNames: ['pgdn-editor'],
  btnSize: 'btn-xs',
  height: 120,
  focus: false,
  airMode: false,

  willDestroyElement: function() {
    this.$('textarea').destroy();
  },

  didInsertElement: function() {
    var _this = this;
// debugger;
    this.$('textarea').pagedownBootstrap();

    // var _content = this.get('content');
    // this.$('textarea').code(_content);
    // this.$('.btn').addClass(_btnSize);
  },
  
  // keyUp: function() {
  //   this.doUpdate();
  // },

  // click: function() {
  //   this.doUpdate();
  // },

  // doUpdate: function() {
  //   var content = this.$('.note-editable').html();
  //   this.set('content', content);
  // }


});

