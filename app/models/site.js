var Site = Ember.Object.extend({
  // createOnServer: function(complete, error) {
  //   var data = JSON.parse(JSON.stringify(this) );
  //   var create_discette_endpoint = '/drive/admin/discette';
  //   return $.ajax(create_discette_endpoint, {
  //     type: 'POST',
  //     dataType: 'json',
  //     data: data
  //   }).then(function(result) {
  //     if (complete) {
  //       complete(result);
  //     }
  //   }, function(result) {
  //     if (error) {
  //       error(result);
  //     }
  //   });
  // },
  getLatestTopics: function() {
    var host = this.get('host');
    // "https://meta.discourse.org";
    var apiUrl = "/passthrough/latest.json";
    var data = {
      host: host
    };
    return $.ajax(apiUrl, {
      type: 'GET',
      dataType: 'json',
      data: data
    })
  }
});

Site.reopenClass({
  getAll: function() {
    var apiUrl = "/discourse_sites/get_sites.json";
    return $.ajax(apiUrl, {
      type: 'GET',
      dataType: 'json'
    })
  }
});


export default Site;
