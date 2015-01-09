import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: [':tip', 'good', 'bad'],

  // shouldRerender: Discourse.View.renderIfChanged('validation'),
  // below is reimplementation of above from discourse:
  shouldRerender: function(){
    Ember.run.once(this, 'rerender');
  }.observes('validation'),
  bad: Em.computed.alias('validation.failed'),
  good: Em.computed.not('bad'),

  render: function(buffer) {
    var reason = this.get('validation.reason');
    if (reason) {
      var icon = this.get('good') ? 'fa-check' : 'fa-times';
      return buffer.push("<i class=\"fa " + icon + "\"></i> " + reason);
    }
  }
});