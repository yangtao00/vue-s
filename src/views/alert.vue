<template>
  <div>
    <button @click="handleOpen1">打开提示 1</button>
    <button @click="handleOpen2">打开提示 2</button>
  </div>
</template>
<script>
let count = 0;
export default {
  methods: {
    handleOpen1() {
      this.$Alert.info({
        content: `我是提示信息${++count}`
      })
    },
    handleOpen2() {
      this.$Alert.info({
        content: '我是提示信息2'
      })
    }
  }
}
</script>
