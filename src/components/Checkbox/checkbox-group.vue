<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
import { findComponentsDownward } from '@/utils/assist';
import Emitter from '@/mixins/emitter';

export default {
  name: 'sCheckboxGroup',
  mixins: [Emitter],
  props: {
    value: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      currVal: this.value,
      children: []
    };
  },
  methods: {
    updateModel(update) {
      this.children = findComponentsDownward(this, 'sCheckbox');
      if (this.children) {
        const { value } = this;
        this.children.forEach(child => {
          child.model = value;

          if (update) {
            child.currVal = value.indexOf(child.label) > -1;
            child.group = true;
          }
        });
      }
    },
    change(data) {
      this.currVal = data;
      this.$emit('input', data);
      this.$emit('on-change', data);
      this.dispatch('sFormItem', 'on-form-change', data);
    }
  },
  mounted() {
    this.updateModel(true);
  },
  watch: {
    value() {
      this.updateModel(true);
    }
  }
};
</script>