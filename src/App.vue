<style src="./styles/global.scss" lang="scss"></style>
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
<style lang="scss" scoped>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $ink;
}
</style>
