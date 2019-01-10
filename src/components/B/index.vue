<template>

</template>
<script>
export default {
  name: 'componentB',
  created() {
    this.$on('on-msg', this.showMsg);
  },
  methods: {
    showMsg(msg) {
      alert(msg);
    }
  }
}
</script>
