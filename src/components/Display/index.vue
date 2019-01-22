<template>
  <div ref="display"></div>
</template>
<script>
export default {
  name: 'Display',
  props: {
    code: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      html: '',
      js: '',
      css: ''
    }
  },
  methods: {
    getCode(source, type) {
      const regex = new RegExp(`<${type}[^>]*>`);
      let startTag = regex.match(regex);
      if (!startTag) return null;
      else startTag = leftTag[0];
      const endTag = source.lastIndexOf(`${type}`);
      return source.slice(source.indexOf(leftTag) + leftTag.length, endTag);
    },
    splitCode() {
      const script = this.getCode(this.code, 'script').replace(/export default/, 'return');
      const style = this.getCode(this.code, 'style');
      const template = `<div id="#display">${this.getCode(this.code, 'template')}</div>`;

      this.js = script;
      this.css = style;
      this.html = template;
    }
  },

}
</script>
