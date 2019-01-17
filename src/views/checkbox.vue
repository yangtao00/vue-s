<template>
  <div>
    <div>
      <h4>单个复选框</h4>
      <s-checkbox v-model="value" :trueValue="trueValue" :falseValue="falseValue">
        <span>选择</span>
      </s-checkbox>
      <div>
        <button type="button" @click="handleChangeVal">手动改变value</button>
      </div>
      <div>当前值：{{value}}</div>
    </div>
    <div>
      <h4>多个复选框</h4>
      <s-checkbox-group v-model="multiple">
        <s-checkbox label="a">
          <span>a</span>
        </s-checkbox>
        <s-checkbox label="b">
          <span>b</span>
        </s-checkbox>
      </s-checkbox-group>
      <div>当前值：{{multiple}}</div>
    </div>
  </div>
</template>
<script>
import sCheckboxGroup from '@/components/Checkbox/checkbox-group';
import sCheckbox from '@/components/Checkbox/checkbox';
export default {
  name: 'Checkbox',
  components: { sCheckboxGroup, sCheckbox },
  data() {
    return {
      value: false,
      trueValue: true,
      falseValue: false,
      multiple: []
    };
  },
  methods: {
    handleChangeVal() {
      this.value = !this.value;
    }
  }
};
</script>
