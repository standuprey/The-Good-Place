<template>
  <div
    class="process-component inner"
    ref="spaceCadet"
    :class="{ 'full-grown': growPlanet }"
  >
    <div class="bg show">
      <img src="@/assets/sparkles.svg" class="sparkles" />
      <img src="@/assets/universe.svg" class="universe" />
      <img src="@/assets/satelite.svg" class="satelite" />
      <img src="@/assets/pisces.svg" class="pisces" />
      <img src="@/assets/rocket.svg" class="rocket" />
    </div>
    <div class="foreground">
      <div class="section-title">
        <div class="bubble"></div>
        <img class="space-cadet" src="@/assets/spacecadet.svg" />
        <h2>Our<br />Process</h2>
      </div>
      <trail-animation :isPaused="!growPlanet" />
      <div class="steps">
        <div class="step-1">
          <img src="@/assets/research.svg" />
          <span>Research</span>
        </div>
        <div class="step-2">
          <img src="@/assets/ideate.svg" />
          <span>Ideate</span>
        </div>
        <div class="step-3">
          <img src="@/assets/strategize.svg" />
          <span>Strategize</span>
        </div>
        <div class="step-4">
          <img src="@/assets/test.svg" />
          <span>Test</span>
        </div>
        <div class="step-5">
          <img src="@/assets/implement.svg" />
          <span>Implement</span>
        </div>
        <div class="step-6">
          <img src="@/assets/optimize.svg" />
          <span>Optimize</span>
        </div>
        <div class="step-7">
          <img src="@/assets/quantify.svg" />
          <span>Quantify</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TrailAnimation from "@/components/TrailAnimation.vue";

export default {
  name: `process-component`,
  data() {
    return {
      parallax: 0,
      activated: false,
    };
  },
  props: [`backgroundColor`],
  components: { TrailAnimation },
  computed: {
    growPlanet() {
      if (this.activated) {
        return true;
      }
      if (this.backgroundColor === `process-color`) {
        this.activated = true;
        return true;
      }
      return false;
    },
  },
};
</script>
<style lang="scss" scoped>
.process-component {
  position: relative;
  height: 870px;
}
.sparkles {
  position: absolute;
  top: 50px;
  left: -128px;
  width: 1138px;
}
.satelite {
  position: absolute;
  top: 170px;
  left: 110px;
}
.universe {
  position: absolute;
  top: 130px;
  left: 800px;
  width: 100px;
}
.pisces {
  position: absolute;
  top: 270px;
  left: 860px;
  width: 60px;
}
.rocket {
  transition: all 2s ease-in-out;
  position: absolute;
  left: 60px;
  width: 20px;
  top: 590px;
  transform: rotate(-30deg);
  opacity: 0;
}
.bg {
  transition: opacity 1s ease-in-out;
  position: relative;
  opacity: 0;
  &.show {
    opacity: 1;
  }
}
.foreground {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}
.foreground,
.bg {
  transition: all 2s ease-in-out;
  transform: scale(1);
}
.full-grown {
  .bg {
    transform: scale(0.9);
    margin-top: 0px;
  }
  .foreground {
    transform: scale(0.7);
    margin-top: -120px;
  }
  .rocket {
    left: 170px;
    top: 450px;
    width: 90px;
    transform: rotate(0deg);
    opacity: 1;
  }
}
.section-title {
  position: relative;
  h2 {
    padding-bottom: 40px;
    position: relative;
  }
  .bubble {
    transition: all 2s ease-in-out;
    background: $process-accent;
    position: absolute;
    top: 12px;
    left: 378px;
    width: 270px;
    height: 270px;
    border-radius: 200px;
  }
  .space-cadet {
    transition: all 2s ease-in-out;
    position: absolute;
    top: -30px;
    left: 487px;
  }
}
.steps {
  width: 600px;
  height: 600px;
  margin: 0 auto;
  padding: 100px 0;
  @include on-circle($item-count: 8, $circle-size: 540px, $item-size: 40px);
  > * {
    img {
      width: 70px;
    }
    span {
      display: block;
      width: 70px;
      text-align: center;
    }
  }
}
</style>
