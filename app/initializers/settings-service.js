export function initialize(container, application) {
  // not availabe in components though..
  application.inject('route', 'settingsService', 'service:settings');
  application.inject('controller', 'settingsService', 'service:settings');
}

export default {
  name: 'settings-service',
  initialize: initialize
};
