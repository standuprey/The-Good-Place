<template>
  <footer @click="goToNext()">
    <div class="right-carrot"></div>
  </footer>
</template>
<script>
import { getRoute, getNextProject } from "@/lib/projectRoutes";

export default {
  name: "project-footer-component",
  props: {
    referer: String,
  },
  data() {
    return {};
  },
  methods: {
    goToNext() {
      this.$router.push(getRoute(getNextProject(this.referer)));
    },
  },
};
</script>
<style lang="scss" scoped>
footer {
  cursor: pointer;
  z-index: 100;
  .right-carrot {
    position: fixed;
    right: 30px;
    bottom: 25px;
    width: 20px;
    height: 20px;
    border-top: 4px solid $color-4;
    border-right: 4px solid $color-4;
    transform: rotate(45deg);
  }
}
</style>
