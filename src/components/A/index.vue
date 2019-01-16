<template>
  <div>
    <p>
      <button type="button" @click="handleClickToParent">向父组件派发信息</button>
    </p>
    <p>
      <button type="button" @click="handleInvokeParentEvent">调用父组件上的方法</button>
    </p>
    <p>
      <button type="button" @click="handleParentBrothersC">找到在父组件中的兄弟组件</button>
    </p>
  </div>
</template>
<script>
import Emitter from '@/mixins/emitter';
import { findComponentUpward, findBrothersComponents } from '@/utils/assist';

export default {
  name: 'componentA',
  mixins: [Emitter],
  created() {
    this.$on('on-msg', this.showMsg);
  },
  methods: {
    handleClickToParent() {
      this.dispatch('Test', 'on-msg', '这条消息来自子组件A');
    },
    handleInvokeParentEvent() {
      const parentC = findComponentUpward(this, 'Test');
      if (parentC) {
        parentC.clMsg();
      }
    },
    handleParentBrothersC() {
      const parentBrothersC = findBrothersComponents(this, 'componentA');
      console.log(parentBrothersC);
    },
    showMsg(val) {
      alert(val);
    },
    clMsg() {
      alert('这条信息来自A组件，在Test组件中通过findComponentDownward工具方法触发');
    }
  }
};
</script>
