<template>
  <div>
    <h1>Vue构造器，extend与$mount</h1>
    <div id="container1"></div>
    <div id="container2"></div>
    <div id="container3"></div>
    <div id="container4"></div>
  </div>
</template>
<script>
import Vue from 'vue';
import Notification from '@/components/Notification';

const AlertComponent = Vue.extend({
  template: '<div>{{ message }}</div>',
  data() {
    return {
      message: 'Vue构造器，extend与$mount'
    };
  }
});

const Instance = new Vue({
  render(h) {
    return h(Notification, {
      props: {
        message: 'Vue构造器，extend与$mount'
      }
    });
  }
});

export default {
  mounted() {
    // 1.
    // 手动渲染,还未挂载
    const component1 = new AlertComponent().$mount();
    // 挂载
    document.getElementById('container1').appendChild(component1.$el);

    // 2
    new AlertComponent({
      el: '#container2'
    });

    // 3
    new AlertComponent().$mount('#container3');

    // ##############

    const component = Instance.$mount();
    document.getElementById('container4').appendChild(component.$el);
  }
};
</script>

