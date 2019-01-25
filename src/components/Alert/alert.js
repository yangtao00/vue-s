import Alert from './notification';

let alertInstance;

function getAlertInstance() {
  alertInstance = alertInstance || Alert.newInstance();
  return alertInstance;
}

function notice({duration = 1.5, content =' '}) {
  let instance = getAlertInstance();
  instance.add({
    content,
    duration,
  });
}
export default {
  info(options) {
    return notice(options);
  }
}