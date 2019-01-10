<template>
  <div>
    <button type="button" @click="handleClickToChild">点击向子级广播消息</button>
    <componet-b></componet-b>
    <componet-a></componet-a>
  </div>
</template>
<script>
import Emitter from '@/mixins/emitter';
import componetA from '@/components/A';
import componetB from '@/components/B';

export default {
  name: 'Form',
  components: {
    componetA,
    componetB
  },
  mixins: [Emitter],
  created() {
    this.$on('on-msg', this.showMsg);
  },
  methods: {
    handleClickToChild() {
      this.broadcast('componentB', 'on-msg', '这条信息来自父组件B');
    },
    showMsg(msg) {
      alert(msg);
    }
  }
};
</script>

