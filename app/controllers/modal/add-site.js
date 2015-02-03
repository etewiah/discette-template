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
      );

    }
  },
  content: {}
});

export default AddSiteModalController;
