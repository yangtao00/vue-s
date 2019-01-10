<template>
</template>
<script>
import Emitter from '@/mixins/emitter';

export default {
  name: 'componentA',
  mixins: [Emitter],
  created() {
    this.dispatch('Form', 'on-msg', '这条消息来自子组件A');
  }
}
</script>
