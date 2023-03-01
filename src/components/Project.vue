<template>
  <div
    class="project-component"
    :class="{ reverse, mobile, desktop: !mobile }"
    :data-project-class="project"
  >
    <div class="left-pan">
      <div class="video-wrapper">
        <video
          class="video"
          autoplay
          playsinline
          loop
          muted
          :src="`https://standupweb.net/tmp/thegoodplace/${mediaSource}`"
        />
      </div>
    </div>
    <div class="right-pan">
      <div class="description">{{ description }}</div>
      <div class="name">{{ name }}</div>
      <div class="case-study-button from-left" @click="goTo()">
        See case Study
      </div>
    </div>
  </div>
</template>
<script>
import { getRoute } from "@/lib/projectRoutes";
import { isMobile } from "@/lib/utils";

export default {
  name: "project-component",
  props: [`mediaSource`, `description`, `name`, "reverse", "project"],
  methods: {
    goTo() {
      this.$router.push(getRoute(this.project));
    },
  },
  computed: {
    mobile() {
      return isMobile();
    },
  },
};
</script>
<style lang="scss" scoped>
.project-component {
  display: flex;
  padding: 50px 0;
  align-items: end;
  gap: 10px;
  &.mobile {
    display: block;
    padding: 20px;
    .right-pan {
      padding-top: 15px;
    }
    video {
      width: 100%;
    }
    .left-pan {
      overflow: hidden;
      width: 100%;
    }
  }
}

.left-pan {
  width: 80%;
}
.video {
  max-width: 700px;
  width: 999px;
}
.description {
  font-size: 22px;
  padding: 20px 0;
  font-weight: 700;
}
.video-wrapper {
  width: 100%;
  video {
    float: right;
  }
}
.desktop {
  .reverse {
    flex-direction: row-reverse;
    .right-pan {
      text-align: right;
    }
    .video-wrapper video {
      float: left;
    }
  }
}
.case-study-button {
  display: inline-block;
  margin-top: 40px;
  font-size: 13px;
  font-weight: 800;
  text-transform: uppercase;
  cursor: pointer;
}
.case-study-button:after {
  display: block;
  content: "";
  border-bottom: solid 3px #fff;
  transform: scaleX(0.1);
  transition: transform 250ms ease-in-out;
}
.case-study-button:hover:after {
  transform: scaleX(1);
}
.case-study-button.from-right:after {
  transform-origin: 100% 50%;
}
.case-study-button.from-left:after {
  transform-origin: 0% 50%;
}
</style>
