export function initialize(container, application) {
  application.inject('route', 'settingsService', 'service:settings');
  application.inject('controller', 'settingsService', 'service:settings');
}

export default {
  name: 'settings-service',
  initialize: initialize
};
