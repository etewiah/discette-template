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
  getCategories: function() {
    var slug = this.get('slug');
    var apiUrl = "/discourse_sites/" + slug + "/categories.json";
    // var apiUrl = "/discourse_sites/passthrough.json";
    return $.ajax(apiUrl, {
      type: 'GET',
      dataType: 'json'
    })
  },
  getTopic: function(topic_id) {
    var slug = this.get('slug');
    var apiUrl = "/discourse_sites/" + slug + "/topic_details.json";
    // var apiUrl = "/passthrough/topic_details.json";
    var data = {
      topic_id: topic_id
    };
    return $.ajax(apiUrl, {
      type: 'GET',
      dataType: 'json',
      data: data
    })
  },
  getLatestTopics: function(category) {
    // http://localhost:3000/discourse_sites/talk_turtlerockstudios_com/latest.json?category=monsters
    var slug = this.get('slug');
    var apiUrl = "/discourse_sites/" + slug + "/latest.json";
    var data = {};
    if (category) {
      data.category = category;
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
