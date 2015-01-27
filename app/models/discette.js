var Discette = Ember.Object.extend({
  name: "",
  files: function(){
    var files = [];
    if (this.get('meta.files.js')) {
      this.get('meta.files.js').forEach( function(fileName){
        files.push({
          name: fileName
        })
      })
    };
    if (this.get('meta.files.css')) {
      this.get('meta.files.css').forEach( function(fileName){
        files.push({
          name: fileName
        })
      })
    };
    return files;
  }.property(),

  createOnServer: function(complete, error) {
    var data = JSON.parse(JSON.stringify(this) );
    var create_discette_endpoint = '/drive/admin/discette';
    return $.ajax(create_discette_endpoint, {
      type: 'POST',
      dataType: 'json',
      data: data
    }).then(function(result) {
      if (complete) {
        complete(result);
      }
    }, function(result) {
      if (error) {
        error(result);
      }
    });
  },
  updateOnServer: function(complete, error) {
    var self = this;
    var data = JSON.parse(JSON.stringify(this) );
    var update_discette_endpoint = '/drive/admin/discette/' + this.id;

    return $.ajax(update_discette_endpoint, {
      type: 'PUT',
      dataType: 'json',
      data: data
    }).then(function(result) {
      if (complete) {
        complete(result);
      }
    }, function(result) {
      if (error) {
        error(result);
      }
    });
  },
  destroyOnServer: function(complete, error) {
    var self = this;
    // var data = JSON.parse(JSON.stringify(this) );
    var delete_discette_endpoint = '/drive/admin/discette/' + this.id;

    return $.ajax(delete_discette_endpoint, {
      type: 'DELETE'
    }).then(function(result) {
      if (complete) {
        complete(result);
      }
    }, function(result) {
      // Post failed to update
      if (error) {
        error(result);
      }
    });
  }
});


export default Discette;
