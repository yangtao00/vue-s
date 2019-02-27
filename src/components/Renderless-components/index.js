import Vue from 'vue';

Vue.component('renderless-component', {
  props:['value'],
  data() {
    return {
      newTag: ''
    }
  },
  render () {
    return this.$scopedSlots.default({
      tags: this.value,
      removeTag: this.removeTag,
      addTag: this.addTag,
      inputAttrs: {
        value: this.newTag
      },
      inputEvents: {
        input: (e) => {
          this.newTag = e.target.value
        },
        keydown: (e) => {
          if (e.keyCode === 13) {
            e.preventDefault();
            this.addTag();
          }
        }
      }
    })
  },
  methods: {
    removeTag(tag) {
      this.$emit('input', this.value.filter(val => val !== tag));
    },
    addTag() {
      const newTag = this.newTag.trim();
      if (newTag.length !== 0 && !this.value.includes(newTag)) {
        this.$emit('input', [...this.value, newTag]);
        this.newTag = '';
      }
    }
  }
})
