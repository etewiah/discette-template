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
  getTopic: function(topic_id) {
    var slug = this.get('slug');
    var apiUrl = "/passthrough/topic_details.json";
    var data = {
      slug: slug,
      topic_id: topic_id
    };
    return $.ajax(apiUrl, {
      type: 'GET',
      dataType: 'json',
      data: data
    })
  },
  getLatestTopics: function() {
    // var host = this.get('host');
    var slug = this.get('slug');
    var apiUrl = "/passthrough/latest.json";
    var data = {
      slug: slug
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
