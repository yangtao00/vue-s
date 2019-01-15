<template>
  <input
    type="text"
    :value="currVal"
    @input="handleInput"
    @blur="handleBlur">
</template>
<script>
import Emitter from '@/mixins/emitter';

export default {
  name: 'sInput',
  mixins: [Emitter],
  props: {
    value: String
  },
  data() {
    return {
      currVal: ''
    }
  },
  watch: {
    value(val) {
      this.currVal = val;
    }
  },
  methods: {
    handleInput(e) {
      const val = e.target.value;
      this.currVal = val;
      this.$emit('input', val);
      this.dispatch('sFormItem', 'on-form-change', val);
    },
    handleBlur(e) {
      this.dispatch('sFormItem', 'on-form-blur', e.target.value);
    }
  }
}
</script>

