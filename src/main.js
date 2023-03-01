import Vue from 'vue'
import App from './App.vue'
import router from './router'

new Vue({
  router,
  el: "#app",
  components: { App },
  render: h => h(App)
})
