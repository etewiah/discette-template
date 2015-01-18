var User = Ember.Object.extend( {
  avatarUrl: function(){
  	return this.get('rootUrl') + this.get('avatar_template').replace(/\{size\}/g, '32');
  }.property()
});

export default User;