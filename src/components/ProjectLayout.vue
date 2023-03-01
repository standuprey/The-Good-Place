<template>
  <div class="project-layout-component" :class="theme">
    <div v-if="!mobile" @click="goHome" class="logo">
      <img src="@/assets/tgp.svg" />
    </div>
    <div @click="goHome" class="close"><div class="cross"></div></div>
    <div class="content">
      <slot />
    </div>
    <project-footer :referer="referer" />
  </div>
</template>
<script>
import { getRoute, getNextProject } from "@/lib/projectRoutes";
import ProjectFooter from "@/components/ProjectFooter.vue";
import { isMobile } from "@/lib/utils";

let reqId;

export default {
  name: "project-layout-component",
  props: {
    referer: String,
    showAnimation: Boolean,
    theme: {
      type: String,
      default: `black`,
    },
  },
  components: { ProjectFooter },
  data() {
    return {
      projectId: null,
      bubbles: [
        { x: 0, y: 1800, color: `#037071` },
        { x: 910, y: 2300, color: `#6B8679` },
        { x: -11, y: 3400, color: `#C4A68C` },
        { x: 900, y: 3700, color: `#AC745C` },
      ],
    };
  },
  computed: {
    mobile() {
      return isMobile();
    },
  },
  mounted() {
    window.scrollTo(0, 0);
    if (this.showAnimation) this.startAnimation();
  },
  destroyed() {
    window.cancelAnimationFrame(reqId);
    reqId = null;
  },
  methods: {
    scale(x) {
      if (window.innerWidth < 641) {
        return ~~(x * window.innerWidth) / 1024;
      }
      return x;
    },
    goHome() {
      this.$router.push(`/?referer=${this.referer}`);
    },
    startAnimation() {
      this.bubbles.forEach((b, index) => {
        if (b.y > document.body.scrollHeight) {
          b.y = -100;
        } else {
          b.y += 0.5;
        }
      });
      reqId = window.requestAnimationFrame(this.startAnimation.bind(this));
    },
    goToNext() {
      this.$router.push(getRoute(getNextProject(this.referer)));
    },
  },
};
</script>
<style lang="scss" scoped>
.project-layout-component {
  overflow: hidden;
  &.black {
    .logo {
      color: #000;
      text-shadow: 2px 2px 0px #fff;
    }
  }
  &.white {
    .logo {
      color: #fff;
      text-shadow: 2px 2px 50px #666;
    }
  }
}
.content {
  position: relative;
}
.close {
  cursor: pointer;
  position: fixed;
  z-index: 100;
  top: 10px;
  right: 11px;
  width: 69px;
  height: 68px;
  border-radius: 35px;
  transition: all 0.4s ease;
  background: rgba(255, 255, 255, 0.3);
  .cross {
    transition: all 0.4s ease;
    position: fixed;
    top: 20px;
    right: 15px;
    display: block;
    width: 35px;
    height: 8px;
    margin: 20px 17px;
    border-top: 4px solid $color-4;
    transform: rotate(45deg);
    &:before {
      transition: all 0.4s ease;
      transform: rotate(-90deg);
      top: -4px;
      content: "";
      position: absolute;
      left: 0px;
      width: 100%;
      border-top: 4px solid $color-4;
    }
  }
}
.logo {
  position: fixed;
  top: 0;
  font-weight: 600;
  z-index: 100;
  cursor: pointer;
}
@media (min-width: 641px) {
  .close:hover {
    background: $color-4;
    .cross {
      &,
      &:before {
        border-color: #fff;
      }
    }
  }
  .logo {
    font-size: 40px;
    padding: 22px;
    img {
      height: 22px;
    }
  }
}
@media (max-width: 640px) {
  .logo {
    font-size: 26px;
    padding: 25px 0 0 15px;
    img {
      height: 12px;
    }
  }
  .close {
    top: 8px;
    right: 11px;
    .cross {
      width: 30px;
      height: 0;
    }
  }
}
.next {
  cursor: pointer;
  position: absolute;
  top: 8px;
  left: 11px;
  width: 69px;
  height: 68px;
  border-radius: 35px;
  transition: all 0.4s ease;
  background: rgba(255, 255, 255, 0.3);
  z-index: 100;
  .right-carrot {
    position: absolute;
    right: 28px;
    top: 25px;
    width: 18px;
    height: 18px;
    border-top: 4px solid $color-4;
    border-right: 4px solid $color-4;
    transform: rotate(45deg);
  }
}
</style>
