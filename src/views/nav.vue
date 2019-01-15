<template>
  <div id="app">
    <div id="nav">
      <ul>
        <li v-for="route in routes">
          <router-link
            v-if="route.name !== 'nav' && route.name !== 'home'"
            key="route.path"
            :to="route.path"
          >{{route.name}}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      routes: this.$router.options.routes
    };
  }
};
</script>


<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  ul,
  li {
    list-style: none;
  }
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
