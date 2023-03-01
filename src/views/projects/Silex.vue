<template>
  <div class="silex-view" :class="{ mobile }">
    <project-layout referer="silex" :show-animation="false">
      <div class="section content">
        <div class="left">
          <div class="client">Client_ <span class="bold">SILEX</span></div>
          <div class="summary">
            <p>
              The cryptocurrency trading platform needed a website revamp as
              well as revisiting the existing logo to reflect an easy-to-use
              platform and connect with a younger audience of new crypto
              traders.
            </p>
          </div>
          <img src="@/assets/projects/silex/pic1.png" class="illustration" />

          <div class="description">
            <h2>Project Description:</h2>
            <p>
              Silex is a product that is missing in the booming crypto trading
              market, with its unique leading solution that accesses multiple
              exchanges and provides usability and security for both retail and
              institutional traders, Silex fulfills the needs of this market.
              Silex is not an exchange. It is a trading platform that allows
              crypto traders to access existing accounts across a variety of
              exchanges. Once the user sets all exchange accounts up in Silex,
              she can view all her balances, positions, and activity reports
              from ONE single platform: SILEX.
            </p>
          </div>
          <revealer
            :start="{ opacity: 0, transform: `translate3d(0, 40px, 0)` }"
            :stop="{ opacity: 1, transform: `translate3d(0, 0, 0)` }"
          >
            <img src="@/assets/projects/silex/pic2.png" class="illustration"
          /></revealer>
          <revealer
            :start="{ opacity: 0, transform: `translate3d(-20px, 0, 0)` }"
            :stop="{ opacity: 1, transform: `translate3d(0, 0, 0)` }"
          >
            <div class="description">
              <h2>Challenge:</h2>
              <p>
                Cryptocurrency trading is exploding. This sudden popularity has
                sparked an incredible rise in the number of crypto trading
                exchanges, which has in turn created a fragmented market. We’ve
                developed brand and digital marketing strategies that cater to
                the growing Millennial demographic.
              </p>
            </div></revealer
          >
          <revealer
            :start="{ opacity: 0, transform: `translate3d(0, 40px, 0)` }"
            :stop="{ opacity: 1, transform: `translate3d(0, 0, 0)` }"
          >
            <img src="@/assets/projects/silex/pic3.png" class="illustration"
          /></revealer>
          <div class="description">
            <h2>Action:</h2>
            <p>
              With careful consideration of the Millenial demographic values and
              strong data analysis, we honed down the key values that would
              anchor our strategy for digital and web development, including:
              Website graphics and content that speaks to the Silex audience
              Transparency and Security in the way it functions through coining
              the unique security features it has. Demonstrate its
              user-friendliness by creating custom icons and building customer
              journey graphics. Building a community through social media,
              crypto networks &amp; the Silex blog.
            </p>
          </div>
          <revealer
            :start="{ opacity: 0, transform: `translate3d(0, 40px, 0)` }"
            :stop="{ opacity: 1, transform: `translate3d(0, 0, 0)` }"
          >
            <img src="@/assets/projects/silex/pic4.png" class="illustration"
          /></revealer>
          <div class="description">
            <h2>Result:</h2>
            <p>
              The revamped website with it’s new exciting colors and graphics,
              in addition to the new content and social media strategy has
              allowed Silex to reach a new audience that is now utilizing the
              exchange platform, as the market for new crypto traders grows, so
              does Silex's market share.
            </p>
          </div>
        </div>
        <div class="right">
          <h2>Services</h2>
          <p>Logo</p>
          <p>Brand architecture</p>
          <p>Brand positioning</p>
          <p>Brand attributes</p>
          <p>Brand archetypes</p>
          <p>Customer personas</p>
          <p>Brand mapping</p>
          <p>Web Design</p>
          <p>Content Strategy</p>
        </div>
      </div>
      <div class="section">
        <revealer
          :start="{ opacity: 0, transform: `translate3d(0, 40px, 0)` }"
          :stop="{ opacity: 1, transform: `translate3d(0, 0, 0)` }"
        >
          <img src="@/assets/projects/silex/pic5.png" class="bottom-image"
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
  name: `silex-view`,
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
