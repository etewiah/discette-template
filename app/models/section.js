var Section = Ember.Object.extend({
  saveNew: function(complete, error) {
  	// var data = {
   //    	subdomain: "subd..."
   //    };
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
  update: function(complete, error) {
    var self = this;
    debugger;
    return $.ajax(create_section_endpoint, {
      type: 'PUT',
      dataType: 'json',
      data: this
    }).then(function(result) {
      debugger;
      // if (complete) complete(PostObject.create(result.post))
      // not quite sure how I'd get a ref to this same base obj to use above
      if (complete) {
        complete(result.post);
      }
    }, function(result) {
      // Post failed to update
      if (error) {
        error(result);
      }
    });
  }
});

// Section.reopenClass({
//   getRootUrl: function(collection, klass) {
//     var retval = {};
//     if (Ember.isEmpty(collection)) { return retval; }

//     collection.forEach(function(item) {
//       retval[item.id] = klass.create(item);
//     });
//     return retval;
//   }
// });



export default Section;
