import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Theo1841 from "./views/projects/Theo1841.vue";
import Cpes from "./views/projects/Cpes.vue";
import DeerTulum from "./views/projects/DeerTulum.vue";
import Silex from "./views/projects/Silex.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/project/theo1841",
      name: "Theo1841",
      component: Theo1841,
    },
    {
      path: "/project/cpes",
      name: "CPES",
      component: Cpes,
    },
    {
      path: "/project/deer-tulum",
      name: "Deer Tulum",
      component: DeerTulum,
    },
    {
      path: "/project/silex",
      name: "Silex",
      component: Silex,
    },
  ],
});
