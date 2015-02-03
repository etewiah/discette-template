var Site = Ember.Object.extend({
  createOnServer: function(complete, error) {
    var host = this.get('host');
    var data = {
      host: host
    };
    // /discourse_sites/create.json?host=http://chattymaps.com
    var apiUrl = '/discourse_sites/create';
    return $.ajax(apiUrl, {
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
