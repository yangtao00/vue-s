<template>
  <label>
    <span>
      <input
        v-if="group"
        type="checkbox"
        :value="label"
        v-model="model"
        @change="handleChange">
      <input
        v-else
        type="checkbox"
        :disabled="disabled"
        :value="currVal"
        @change="handleChange"
        :checked="currVal"
      >
    </span>
    <slot></slot>
  </label>
</template>
<script>
import Emitter from '@/mixins/emitter';
import { findComponentUpward } from '@/utils/assist';

export default {
  name: 'sCheckbox',
  mixins: [Emitter],
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: [Number, String, Boolean],
      defalut: false
    },
    label: {
      type: [Number, String, Boolean]
    },
    trueValue: {
      type: [Number, String, Boolean],
      defalut: true
    },
    falseValue: {
      type: [Number, String, Boolean],
      defalut: false
    }
  },
  data() {
    return {
      currVal: this.value,
      group: false,
      model: [],
      parent: ''
    };
  },
  methods: {
    handleChange(e) {
      if (this.disabled) return false;
      const isChecked = e.target.checked;
      this.currVal = isChecked;
      const value = isChecked ? this.trueValue : this.falseValue;
      this.$emit('input', value);

      // 如果是组合模式
      if (this.parent) {
        this.parent.change(this.model);
      } else {
        this.$emit('on-change', value);
        this.dispatch('sFormItem', 'on-form-change', value);
      }
    },
    updateModel() {
      this.currVal = this.value === this.trueValue;
    }
  },
  watch: {
    value(val) {
      if (val === this.trueValue || val === this.falseValue) {
        this.updateModel();
      } else {
        throw 'value should be trueValue or falseValue';
      }
    }
  },
  mounted() {
    this.parent = findComponentUpward(this, 'sCheckboxGroup');
    if (this.parent) this.group = true;
    if (this.group) {
      this.parent.updateModel(true);
    } else {
      this.updateModel();
    }
  },
};
</script>

