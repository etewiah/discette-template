var Section = Ember.Object.extend({
  createOnServer: function(complete, error) {
    var data = JSON.parse(JSON.stringify(this) );
    var create_section_endpoint = '/drive/admin/section';
    return $.ajax(create_section_endpoint, {
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
    var update_section_endpoint = '/drive/admin/section/' + this.id;

    return $.ajax(update_section_endpoint, {
      type: 'PUT',
      dataType: 'json',
      data: data
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

Section.reopenClass({
  getRootDomainUrl: function() {
    return PreloadStore.get('currentSection').root_url || "http://klavado.com";
  }
});



export default Section;
