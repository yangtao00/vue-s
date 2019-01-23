<template>
  <div ref="display"></div>
</template>
<script>
import Vue from 'vue';
import randomStr from '@/utils/random_str.js';

export default {
  name: 'sDisplay',
  props: {
    code: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      id: randomStr(), // 用于销毁动态创建的style
      html: '',
      js: '',
      css: ''
    }
  },
  methods: {
    // 使用正则分割代码
    getCode(source, type) {
      const regex = new RegExp(`<${type}[^>]*>`);
      // 使用字符串的match方法，匹配出对应的代码片段
      let startTag = source.match(regex);
      if (!startTag) return null;
      // 没有全局标志（g）的match返回是一个数组，第0位是匹配的字段
      else startTag = startTag[0];
      const endTag = source.lastIndexOf(`</${type}>`);
      // source.indexOf(startTag) + startTag.length 代表从`<type>`之后开始截取内容
      return source.slice(source.indexOf(startTag) + startTag.length, endTag);
    },
    splitCode() {
      this.js = this.getCode(this.code, 'script').replace(/export default/, 'return');
      this.css = this.getCode(this.code, 'style');
      this.html = `<div id="#display">${this.getCode(this.code, 'template')}</div>`;
    },
    renderCode() {
      this.splitCode();
      if (this.html && this.js) {
        const parseStr2Func = new Function(this.js)();
        parseStr2Func.template = this.html;
        const Component = Vue.extend(parseStr2Func);
        this.component = new Component().$mount();
        this.$refs.display.appendChild(this.component.$el);

        if (this.css) {
          const style = document.createElement('style');
          style.type = 'text/css';
          style.id = this.id;
          style.innerHTML = this.css;
          document.getElementsByTagName('head')[0].appendChild(style);
        }
      }
    },
    destoryCode() {
      // 删除css
      const $target = document.getElementById(this.id);
      if ($target) $target.parentNode.removeChild($target);

      // 删除动态组件
      if (this.component) {
        this.$refs.display.removeChild(this.component.$el);
        this.component.$destory();
        this.component = null;
      }
    }
  },
  beforeDestroy() {
    this.destoryCode();
  },
  mounted() {
    this.renderCode();
  },
  watch: {
    code() {
      this.destoryCode();
      this.renderCode();
    }
  },
}
</script>