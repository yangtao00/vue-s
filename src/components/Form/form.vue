<template>
  <form>
    <slot></slot>
  </form>
</template>
<script>
export default {
  name: 'sForm',
  provide() {
    return {
      form: this
    }
  },
  props: {
    model: Object,
    rules: Object
  },
  data() {
    return {
      fields: []
    }
  },
  created() {
    this.$on('on-form-item-add', field => {
      if (field) this.fields.push(field);
    }),
    this.$on('on-form-item-remove', field => {
      if (field) this.fields.splice(this.fields.indexOf(field), 1);
    })
  },
  methods: {
    // 重置
    resetFields() {
      this.fields.map(field => {
        field.resetField();
      })
    },
    // 校验
    validate(callback) {
      return new Promise((resolve) => {
        let count = 0;
        let valid = true;
        this.fields.map(field => {
          field.validate('', errors => {
            if (errors) {
              valid = false;
            }
            if (++count === this.fields.length) {
              resolve(valid);
              typeof callback === 'function' ? callback(valid) : null;
            }
          })
        })
      }, () => {})
    }
  }
}
</script>
