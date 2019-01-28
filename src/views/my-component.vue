<template>
  <Render :render="render"></Render>
</template>
<script>
import Render from './render';
export default {
  props: {
    render: Function
  },
  components: {
    Render
  }
}
</script>
