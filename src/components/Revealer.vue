<template>
  <div class="revealer-component" :style="style">
    <slot />
  </div>
</template>
<script>

export default {
  name: `revealer-component`,
  props: [`start`, `stop`, `isLoaded`],
  data() {
    return {
      style: null,
    }
  },
  watch: {
    isLoaded() {
      this.checkInView(null, 0)
    },
  },
  mounted() {
    this.style = this.start
    window.addEventListener('scroll', this.checkInView)
    this.checkInView(null, 0)
  },
  destroyed() {
    window.removeEventListener('scroll', this.checkInView)
  },
  methods: {
    checkInView(ev, offset = 300) {
      const top = ~~(this.$el.getBoundingClientRect().top + window.scrollY + offset)
      if (window.innerHeight + window.scrollY > top) {
        this.style = this.stop
      } else {
        this.style = this.start
      }
    },
  },
}
</script>
<style lang="scss" scoped>
  .revealer-component {
    position: relative;
    transition: all 0.6s ease-in-out;
  }
</style>
