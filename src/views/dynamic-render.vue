<template>
  <div>
    <h4>动态渲染.vue文件的组件</h4>
    <s-display :code="code"></s-display>
  </div>
</template>
<script>
import sDisplay from '@/components/Display';
import { code } from './default.js';

export default {
  components: { sDisplay },
  data() {
    return {
      code,
    }
  },
}
</script>