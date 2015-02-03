import ModalController from '../modal';
import Site from '../../models/site';

var AddSiteModalController;

AddSiteModalController = ModalController.extend({
  needs: ['discourse-sites'],
  siteUrlValidation: function() {
    if (!this.get('validate')) {
      return;
    }
    var targetDiscourseUrl = this.get("siteUrl");
    var valid = /^(ftp|http|https):\/\/[^ "]+$/.test(targetDiscourseUrl);
    if (!valid) {
      return {
        failed: true,
        reason: "Invalid url"
      };
    }
  }.property('validate', 'siteUrl'),
  actions: {
    addSite: function() {

      var targetDiscourseUrl = this.get("siteUrl");

      var valid = /^(ftp|http|https):\/\/[^ "]+$/.test(targetDiscourseUrl);
      if (!valid) {
        this.set('validate', true);
        return;
      } else {
        this.set('validate', false);
      }

      var siteModel = Site.create({
        host: targetDiscourseUrl
      });

      siteModel.createOnServer(function(result) {
          // self.sendAction('onCreateSuccessAction', result);
          this.get('controllers.discourse-sites.model').pushObject(result);
          this.transitionToRoute('discourse-sites.site', result.slug);
          // this.get('controllers.sites').set('currentSite', result);
          return this.send('closeModal');
        }.bind(this),
        function(error) {
          var serverError = {
            failed: true,
            reason: "Sorry, it seems this is not a valid Discourse server Url"
          };
          this.set('siteUrlValidation', serverError);
        }.bind(this)
        // function(error) {
        //   // self.set('serverError', error.responseJSON.errors[0]);
        //   var errorMessage = "Sorry, there has been an error.";
        //   if (error.responseJSON && error.responseJSON.errors) {
        //     errorMessage = error.responseJSON.errors[0];
        //   }
        //   self.set('serverError', errorMessage);
        //   self.set('validate', false);
        // }
      );

      // var domain = targetDiscourseUrl.split('/')[2] || targetDiscourseUrl.split('/')[0];
      // var domainId = domain.replace(/\./g, '_');
      // only use slug instead of host if I'm sure site is in db
      // var apiUrl = "/remote_discourse/get_or_add_site.json?host=" + targetDiscourseUrl;
      // $.getJSON(apiUrl).then(
      //   function(response) {
      //     debugger;
      //     // var site = this.store.createRecord('site', {
      //     //   display_name: response.display_name,
      //     //   description: response.description,
      //     //   slug: response.slug,
      //     //   base_url: response.base_url
      //     // });
      //     // site.save();
      //     // TODO


      //   }.bind(this),
      //   function(error) {
      //     var serverError = {
      //       failed: true,
      //       reason: "Sorry, it seems this is not a valid Discourse server Url"
      //     };
      //     this.set('siteUrlValidation', serverError);
      //   }.bind(this)
      // );


    }
  },
  content: {}
});

export default AddSiteModalController;
