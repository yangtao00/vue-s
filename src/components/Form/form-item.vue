<template>
  <div>
    <label v-if="label" :class="{ 's-form-item-required': isRequired }">{{label}}</label>
    <slot></slot>
    <div v-if="validateState === 'error'" class="s-form-item-error-msg">{{validateMsg}}</div>
  </div>
</template>
<script>
import Emitter from '@/mixins/emitter';
import AsyncValidator from 'async-validator'

export default {
  name: 'sFormItem',
  mixins: [Emitter],
  inject: ['form'],
  props: {
    label: String,
    prop: String
  },
  data() {
    return {
      isRequired: false,
      validateState: '',
      validateMsg: ''
    }
  },
  computed: {
    fieldValue() {
      return this.form.model[this.prop]
    }
  },
  methods: {
    setRules() {
      this.$on('on-form-change', this.onFieldChange);
      this.$on('on-form-blur', this.onFieldBlur);
    },
    setRequiredSign() {
      const rules = this.handleGetRules();
      rules.length && rules.every(item => {
        this.isRequired = item.required;
      })
    },
    // 获取校验规则
    handleGetRules() {
      const currFormItemRules = this.form.rules[this.prop] || [];
      return [].concat(currFormItemRules || []);
    },
    // 过滤校验规则
    handleFilterRules(trigger) {
      const rules = this.handleGetRules();
      return rules.filter(rule => !rule.trigger || rule.trigger.indexOf(trigger) > -1);
    },
    // 校验
    validate(trigger, callback = function() {}) {
      const rules = this.handleFilterRules(trigger);
      if (!rules || !rules.length) return false;
      this.validateState = 'validating';
      const discriptor = {
        [this.prop]: rules
      };
      const validator = new AsyncValidator(discriptor);
      const model = {
        [this.prop]: this.fieldValue
      }
      validator.validate(model, { firstFields: true }, errors => {
        this.validateState = !errors ? 'success' : 'error';
        this.validateMsg = errors ? errors[0].message: '';
        callback(this.validateMsg);
      });
    },
    onFieldChange() {
      this.validate('change');
    },
    onFieldBlur() {
      this.validate('blur');
    },
    resetField() {
      this.validateState = '';
      this.validateMsg = '';
      this.form.model[this.prop] = this.initialVal;
    }
  },
  // 组件渲染时,将实例缓存到Form中
  mounted() {
    // 如果绑定的有prop,则缓存
    if (this.prop) {
      this.dispatch('sForm', 'on-form-item-add', this);
      this.setRequiredSign();
      this.setRules();
      // 设置初始值，用于表单重置
      this.initialVal = this.fieldValue;
    }
  },
  beforeDestroy() {
    this.dispatch('sForm', 'on-form-item-remove', this);
  }
}
</script>
<style lang="less" scoped>
  .s-form-item-required::before {
    content: '*';
    color: red;
  }
  .s-form-item-error-msg {
    color: red;
  }
</style>


