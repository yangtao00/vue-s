<template>
  <div>
    <p>
      <button type="button" @click="handleClickToChild">向子组件广播消息</button>
    </p>
    <p>
      <button type="button" @click="handleInvokeChildEvent">调用子组件上的方法</button>
    </p>
    <componet-a></componet-a>
  </div>
</template>
<script>
import Emitter from '@/mixins/emitter';
import { findComponentDownward } from '@/utils/assist';
import componetA from '@/components/A';

export default {
  name: 'Test',
  components: {
    componetA
  },
  mixins: [Emitter],
  created() {
    this.$on('on-msg', this.showMsg);
  },
  methods: {
    handleClickToChild() {
      this.broadcast('componentA', 'on-msg', '这条信息来自父组件Test');
    },
    handleInvokeChildEvent() {
      const childC = findComponentDownward(this, 'componentA');
      if (childC) {
        childC.clMsg();
      }
    },
    showMsg(msg) {
      alert(msg);
    },
    clMsg() {
      alert(
        '这条信息来自Test组件，在A组件中通过findComponentUpward工具方法触发'
      );
    }
  }
};
</script>

