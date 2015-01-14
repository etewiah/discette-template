var Section = Ember.Object.extend( {

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