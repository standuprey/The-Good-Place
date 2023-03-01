<template>
  <div class="theo1841-view" :class="{ mobile }">
    <project-layout referer="theo1841" :show-animation="false">
      <div class="section content">
        <div class="left">
          <div class="client">Client_ <span class="bold">THEO1841</span></div>
          <div class="summary">
            <p>
              Introducing an organic chocolate brand that uses only premium
              &amp; clean ingredients. Theo1841 approached us to help build a
              brand and it&apos;s e-commerce from the ground up, we cleansed our
              palates and got to work.
            </p>
          </div>
          <img
            src="@/assets/projects/theo1841/illustration.png"
            class="illustration"
          />

          <div class="description">
            <h2>Project Description:</h2>
            <p>
              We immersed ourselves in the world of chocolate, conducting
              exploratory research to better understand who the new product
              would be for and how it could stand out in a sea of chocolates
              currently on the shelf. The results defined a clear gap in the
              market for a chocolate that not only tastes great, but is better
              for you as well. This opportunity drove the subsequent product
              development and surrounding brand strategy.
            </p>
          </div>
          <revealer
            :start="{ opacity: 0, transform: `translate3d(0, 40px, 0)` }"
            :stop="{ opacity: 1, transform: `translate3d(0, 0, 0)` }"
          >
            <img
              src="@/assets/projects/theo1841/bean_to_bar.png"
              class="illustration"
          /></revealer>
          <revealer
            :start="{ opacity: 0, transform: `translate3d(-20px, 0, 0)` }"
            :stop="{ opacity: 1, transform: `translate3d(0, 0, 0)` }"
          >
            <div class="description">
              <h2>Challenge:</h2>
              <p>
                Create a brand that is meaningful, distinctive, accessible,
                protectibale &amp; future proof. Differentiation from the
                competition, elevating the concept of “simple ingredients'' to a
                sophisticated and delectable experience.
              </p>
            </div></revealer
          >
          <revealer
            :start="{ opacity: 0, transform: `translate3d(0, 40px, 0)` }"
            :stop="{ opacity: 1, transform: `translate3d(0, 0, 0)` }"
          >
            <img src="@/assets/projects/theo1841/typo.png" class="illustration"
          /></revealer>
          <div class="description">
            <h2>Action:</h2>
            <p>
              We performed a strategy that followed two distinct paths each with
              clear goals marked by clear metrics and goals, in a timely and
              organized manner without skimping on creativity and innovation.
            </p>
          </div>
          <revealer
            :start="{ opacity: 0, transform: `translate3d(-20px, 0, 0)` }"
            :stop="{ opacity: 1, transform: `translate3d(0, 0, 0)` }"
          >
            <div class="description">
              <h2 class="no-padding">1. Brand Discovery</h2>
              <p>
                We went deep to the heart of Theo1841, the discovery revealed
                the brand strengths and weaknesses and what customers value most
                in what we&apos;re offering and why. We gained meaningful
                insights within the competitive landscape, to better understand
                the consumers who make up the market, and what motivates
                category purchase.
              </p>
            </div></revealer
          >
          <revealer
            :start="{ opacity: 0, transform: `translate3d(-20px, 0, 0)` }"
            :stop="{ opacity: 1, transform: `translate3d(0, 0, 0)` }"
          >
            <div class="description">
              <h2 class="no-padding">2. Brand Strategy</h2>
              <p>
                Research, Insights and metrics interpretations, moodboards &amp;
                surveys led us to the name Theo1841, which stands for the name
                of the chocolate molecule “theobromine” and the year it was
                discovered. The connection to the origin of the chocolate at a
                molecular level resonates with the organic clean nature of the
                product.
              </p>
            </div></revealer
          >
          <revealer
            :start="{ opacity: 0, transform: `translate3d(0, 40px, 0)` }"
            :stop="{ opacity: 1, transform: `translate3d(0, 0, 0)` }"
          >
            <img
              src="@/assets/projects/theo1841/graphics.png"
              class="illustration"
          /></revealer>
          <div class="description">
            <h2>Result:</h2>
            <p>
              Theo1841 Chocolate was successfully launched for e-commerce and
              social channels just in time for the holiday season and has made
              its way into the daily routines of many. Theo1841 is currently
              hard at work developing new flavor SKUs to continue to give those
              who try it an idea of what chocolate was always meant to taste
              like.
            </p>
          </div>
        </div>
        <div class="right">
          <h2>Services</h2>
          <p>Brand discovery</p>
          <p>Brand audit</p>
          <p>Qualitative research</p>
          <p>Quantitative research</p>
          <p>Research analysis</p>
          <p>Brand strategy</p>
          <p>Mission, vision, values</p>
          <p>Brand architecture</p>
          <p>Brand positioning</p>
          <p>Brand attributes</p>
          <p>Brand archetypes</p>
          <p>Customer personas</p>
          <p>Brand mapping</p>
          <p>Website</p>
          <p>Email marketing</p>
          <p>Ongoing support</p>
        </div>
      </div>
      <div class="section">
        <revealer
          :start="{ opacity: 0, transform: `translate3d(0, 40px, 0)` }"
          :stop="{ opacity: 1, transform: `translate3d(0, 0, 0)` }"
        >
          <img
            src="@/assets/projects/theo1841/screenshot.png"
            class="bottom-image"
        /></revealer>
      </div>
    </project-layout>
  </div>
</template>
<script>
import ProjectLayout from "@/components/ProjectLayout.vue";
import Revealer from "@/components/Revealer.vue";
import { isMobile } from "@/lib/utils";

export default {
  name: `theo1841-view`,
  data() {
    return {};
  },
  components: { ProjectLayout, Revealer },
  methods: {},
  computed: {
    mobile() {
      return isMobile();
    },
  },
};
</script>
<style lang="scss" scoped>
.section {
  width: 100%;
  margin: 0 100px;
  position: relative;
}
.content {
  padding-bottom: 80px;
  display: flex;
}
.mobile {
  .section {
    margin: 0 20px;
  }
  .content {
    display: block;
    .left {
      width: calc(100% - 40px);
      padding: 0;
    }
  }
  .right {
    display: none;
  }
}
.client {
  font-family: "Sharp";
  padding-top: 35px;
  font-size: 25px;
  .bold {
    font-weight: 700;
  }
}
.left {
  width: 50%;
  padding-right: 100px;
}
.right {
  padding-top: 40px;
  h2 {
    font-weight: bold;
    font-family: "Sharp";
    font-size: 18px;
    text-align: left;
    padding: 0;
  }
  p {
    font-weight: 100;
    font-family: "Sharp";
    text-align: justify;
  }
}
.summary {
  p {
    font-family: "Sharp";
    font-size: 20px;
    font-weight: 700;
  }
}
.illustration {
  display: block;
  width: 100%;
  margin: 50px auto 0;
}
.bottom-image {
  margin: 30px 0;
  max-width: 70%;
  width: calc(100% - 200px);
  display: block;
}
.description {
  h2 {
    font-family: "Sharp";
    font-weight: 100;
    font-size: 18px;
    text-align: left;
    padding: 30px 0 15px 0;
  }
  p {
    margin: 0;
    font-weight: 600;
    font-family: "Sharp";
    text-align: justify;
  }
  .no-padding {
    padding-bottom: 5px;
  }
}
@media (max-width: 640px) {
  .summary,
  .description {
    margin: 10px;
    width: calc(100% - 20px);
  }
}
</style>
