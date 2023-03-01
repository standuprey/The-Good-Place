<template>
  <div class="services-component inner">
    <div class="section-title">
      <h2>Services</h2>
      <div class="illustration">
        <magic-icon :show="showServicesHighlights" />
      </div>
    </div>
    <div class="container">
      <div
        class="left-pan"
        ref="servicesHighlights"
        :class="{ show: showServicesHighlights }"
      >
        <div class="service-icon">
          <img src="@/assets/branding.svg" />
        </div>
        <h4>Brand Marketing</h4>
        <ul>
          <li>Logo &amp; identity development</li>
          <li>Brand strategy</li>
          <li>Brand books &amp; style guide</li>
          <li>Qualitative &amp; quantitative research</li>
          <li>Mission, vision, values</li>
          <li>Brand architecture</li>
          <li>Brand positioning</li>
        </ul>
      </div>
      <div class="right-pan" :class="{ show: showServicesHighlights }">
        <div class="service-icon">
          <img src="@/assets/marketing.svg" />
        </div>
        <h4>Digital Marketing</h4>
        <ul>
          <li>Planning &amp; governance</li>
          <li>Strategy &amp; consulting</li>
          <li>Systems, structures, and processes</li>
          <li>Content strategy</li>
          <li>Photo &amp; video production</li>
          <li>Social media strategy</li>
          <li>E-commerce (Shopify)</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import MagicIcon from "@/components/MagicIcon.vue";

export default {
  name: `services-component`,
  props: [`backgroundColor`],
  components: { MagicIcon },
  computed: {
    showServicesHighlights() {
      return this.backgroundColor === `services-color`;
    },
  },
};
</script>
<style lang="scss" scoped>
ul {
  line-height: 1.5;
  font-size: 18px;
  font-weight: 100;
}
.container {
  padding-bottom: 100px;
}
.section-title {
  padding: 70px 0 30px 0;
  h2 {
    position: relative;
    z-index: 1;
  }
  .illustration {
    position: relative;
    width: 50px;
    margin: 0 auto;
    img {
      width: 50px;
      display: block;
      position: relative;
    }
    &:before {
      content: "";
      position: absolute;
      border-radius: 200px;
      background: $services-accent;
      top: -167px;
      left: -97px;
      width: 240px;
      height: 240px;
    }
  }
}
.service-icon {
  transition: all 1.5s ease-out;
  transition-delay: 0.2s;
  &,
  img {
    width: 40px;
    height: 40px;
  }
}
h4 {
  clear: both;
}
.left-pan,
.right-pan {
  transition: all 1s ease-out;
  opacity: 0;
  &.show {
    opacity: 1;
    .service-icon {
      transform: scale(1);
    }
  }
}
@media (min-width: 651px) {
  ul {
    height: 200px;
  }
  .service-icon {
    border-radius: 100px;
    background: $services-accent;
    float: left;
    padding: 20px;
    overflow: visible;
    margin-bottom: 20px;
    transform: scale(2);
  }
  .left-pan {
    padding-right: 110px;
    &.show {
      padding-right: 70px;
    }
  }
  .right-pan {
    padding-left: 110px;
    &.show {
      padding-left: 70px;
    }
  }
  .left-pan {
    text-align: right;
    .service-icon {
      float: right;
    }
  }
}
@media (max-width: 650px) {
  .container {
    padding-bottom: 50px;
  }
  .service-icon {
    margin: 0 auto;
    transform: scale(1.4);
  }
  h4 {
    text-align: center;
    padding: 5px 0 10px 0;
    margin: 0;
  }
  ul {
    padding: 0 0 40px 40px;
    list-style: circle;
    font-size: 13px;
  }
}
</style>
