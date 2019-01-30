<template>
  <div>
    <keep-alive>
      <component :is="component"></component>
    </keep-alive>
    <div>
      <button type="button" @click="handleRender('A')">渲染A组件</button>
      <button type="button" @click="handleRender('B')">渲染B组件</button>
    </div>
    <div>
      <s-button>普通按钮</s-button>
    </div>
    <div>
      <s-button to="http://www.baidu.com">当前页跳转</s-button>
    </div>
    <s-button to="http://www.baidu.com" target="_blank">新tab页跳转</s-button>
  </div>
</template>
<script>
import componentA from '@/components/Dynamic-components/a';
import componentB from '@/components/Dynamic-components/b';
import sButton from '@/components/Dynamic-components/button';

export default {
  components: {
    componentA,
    componentB,
    sButton
  },
  data() {
    return {
      component: componentA
    }
  },
  methods: {
    handleRender(componentName) {
      if (componentName === 'A') {
        this.component = componentA;
      }
      if (componentName === 'B') {
        this.component = componentB;
      }
    }
  },
}
</script>