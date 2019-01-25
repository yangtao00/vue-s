import Alert from './index.vue';
import Vue from 'vue';

Alert.newInstance = properties => {
  const props = properties || {};
  const Instance = new Vue({
    data: props,
    render(h) {
      return h(Alert, {
        props
      });
    }
  });
  const component = Instance.$mount();
  document.body.appendChild(component.$el);
  const alert = Instance.$children[0];

  return {
    add(noticeProps) {
      alert.add(noticeProps);
    },
    remove(noticeProps) {
      alert.remove(noticeProps);
    }
  }
}
export default Alert;