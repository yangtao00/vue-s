<template>
  <div>
    {{ message }}
  </div>
</template>
<script>
export default {
  name: 'Notification',
  props: {
    message: {
      type: ''
    }
  },
  data() {
    return {

    }
  }
}
</script>