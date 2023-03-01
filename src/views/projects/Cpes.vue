<template>
  <div class="cpes-view" :class="{ mobile }">
    <project-layout referer="cpes" :show-animation="false">
      <div class="section content">
        <div class="left">
          <div class="client">Client_ <span class="bold">CPES</span></div>
          <div class="summary">
            <p>
              The Cannabis Political Economy Symposium hosts a groundbreaking
              event at the US Capitol bringing together policymakers, &amp;
              business leaders to explore the theme: Cannabis best practices and
              policy barriers.
            </p>
          </div>
          <img src="@/assets/projects/cpes/pic1.png" class="illustration" />

          <div class="description">
            <h2>Project Description:</h2>
            <p>
              CPES is a forum created to address cannabis research from leading
              academics, experts, and policymakers to learn, engage in dialogue,
              and exchange ideas in the heart of Capitol Hill. They reached out
              to The Good Place seeking to create a distinct brand identity as
              well as design the collaterral and promotional material for this
              grand event.
            </p>
          </div>
          <revealer
            :start="{ opacity: 0, transform: `translate3d(0, 40px, 0)` }"
            :stop="{ opacity: 1, transform: `translate3d(0, 0, 0)` }"
          >
            <img src="@/assets/projects/cpes/pic2.png" class="illustration"
          /></revealer>
          <revealer
            :start="{ opacity: 0, transform: `translate3d(-20px, 0, 0)` }"
            :stop="{ opacity: 1, transform: `translate3d(0, 0, 0)` }"
          >
            <div class="description">
              <h2>Challenge:</h2>
              <p>
                For decades cannabis has been taboo and the thought of having a
                formal event in the US Capitol with members of congress as well
                as researchers and professionals in the area was unthinkable.
                Our challenge was to surpass previous misconceptions about the
                plant and its medicinal uses. We had to create a brand identity
                that was authoritative, approachable, and current, evocative of
                the breadth of academic work and scientific knowledge behind the
                event and the people attending.
              </p>
            </div></revealer
          >
          <revealer
            :start="{ opacity: 0, transform: `translate3d(0, 40px, 0)` }"
            :stop="{ opacity: 1, transform: `translate3d(0, 0, 0)` }"
          >
            <img src="@/assets/projects/cpes/pic3.png" class="illustration"
          /></revealer>
          <div class="description">
            <h2>Action:</h2>
            <p>
              In auditing the “cannabis/academic/business” space significant to
              the event target demographic, we realized that the customer
              persona gravitated towards a modern, clean, elegant, yet colorful
              branding style. The design elements were heavily weighted on CPES
              interdisciplinary approach, hosting representatives from
              government agencies and industry leaders.
            </p>
            <div class="p">
              We created the brand architecture with these elements as our
              compass:
              <ul>
                <li>_Clearly communicates the symposium&apos;s attributes</li>
                <li>_Union Of Minimalism And Traditional Values</li>
                <li>_Symmetrical design</li>
                <li>_Nature-inspired color palette</li>
                <li>
                  _Traditional imagery that highlighted the unique setting for
                  the event.
                </li>
              </ul>
            </div>
            <div class="p">
              We especially focused on creating a color system hierarchy running
              through the design elements, each highlighting the 4 categories
              from the event:
              <ul>
                <li>_Medical and industrial use</li>
                <li>_Market and investment</li>
                <li>_Policy and public administration</li>
                <li>_Social impact and equity</li>
              </ul>
            </div>
          </div>
          <revealer
            :start="{ opacity: 0, transform: `translate3d(0, 40px, 0)` }"
            :stop="{ opacity: 1, transform: `translate3d(0, 0, 0)` }"
          >
            <img src="@/assets/projects/cpes/pic4.png" class="illustration"
          /></revealer>
          <div class="description">
            <h2>Result:</h2>
            <p>
              The color system hierarchy works perfectly across the printed
              material, collateral, and signage within the event. The resulting
              combo of color, typography, imagery, vibrant color accents, and
              light illustrations create a juxtaposition between modern with
              more traditional elements bringing to life a brand that is
              relevant today and for the future
            </p>
          </div>
        </div>
        <div class="right">
          <h2>Services</h2>
          <p>Logo</p>
          <p>Brand strategy</p>
          <p>Brand identity</p>
          <p>Brand attributes</p>
          <p>Web Design</p>
          <p>Stationary Design</p>
          <p>Marketing Materials</p>
        </div>
      </div>
      <div class="section">
        <revealer
          :start="{ opacity: 0, transform: `translate3d(0, 40px, 0)` }"
          :stop="{ opacity: 1, transform: `translate3d(0, 0, 0)` }"
        >
          <img src="@/assets/projects/cpes/pic5.png" class="bottom-image"
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
  name: `cpes-view`,
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
.p {
  margin: 25px 0;
  font-weight: 600;
  ul {
    font-weight: 100;
    margin-left: 30px;
    li {
      margin-top: 5px;
    }
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
