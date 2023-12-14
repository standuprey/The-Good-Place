<template>
  <div id="app">
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>
<script>
export default {
  name: 'app',
}
</script>
<style lang="scss">
@import "styles/global";
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $ink;
}
</style>
