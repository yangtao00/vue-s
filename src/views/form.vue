<template>
  <div>
    <h4>表单校验</h4>
    <s-form ref="form" :model="formValidate" :rules="rulesValidate">
      <s-form-item label="姓名" prop="name">
        <s-input v-model="formValidate.name"></s-input>
      </s-form-item>
      <s-form-item label="邮箱" prop="email">
        <s-input v-model="formValidate.email"></s-input>
      </s-form-item>
      <div>
        <button type="button" @click="handleSubmit">提交</button>
        <button type="button" @click="handleReset">重置</button>
      </div>
    </s-form>
  </div>
</template>
<script>
import { sForm, sFormItem } from '@/components/Form';
import sInput from '@/components/Input/input';

export default {
  components: {
    sForm,
    sFormItem,
    sInput
  },
  data() {
    return {
      formValidate: {
        name: '',
        email: ''
      },
      rulesValidate: {
        name: [
          {
            required: true, message: '请输入姓名', trigger: 'blur'
          }
        ],
        email: [
          {
            required: true, message: '请输入邮箱', trigger: 'blur'
          },
          {
            type: 'email', message: '邮箱格式错误', trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    handleSubmit() {
      this.$refs.form.validate(valid => {
        alert(valid ? 'success' : 'error');
      })
    },
    handleReset() {
      this.$refs.form.resetFields();
    }
  }
}
</script>
