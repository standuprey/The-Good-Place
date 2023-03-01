<template>
  <div class="home-view" :class="backgroundColor">
    <div class="masthead">
      <header>
        <div :class="{ show: logoVisible }" class="logo">
          <div>The</div>
          <div>G<img src="@/assets/tgp.svg" />d</div>
          <div>Place</div>
        </div>
        <main-menu class="menu" :menu-items="nonEmptyMenuItems" />
      </header>
      <div class="intro">
        <intro-animation
          :data="introData"
          :done-callback="showLogo"
          :createBubble="createBubble"
          :isPaused="isPaused"
        />
      </div>
    </div>
    <section>
      <div class="process" ref="process" v-if="big">
        <div class="inner bubbles">
          <div
            v-for="(bubble, index) in bubbles"
            :key="`bubble-${index}`"
            class="bubble"
            :class="backgroundColor"
            :style="{
              top: `${bubble.y}px`,
              left: `${scale(bubble.x)}px`,
              width: `${scale(bubble.size)}px`,
              height: `${scale(bubble.size)}px`,
            }"
          />
        </div>
        <div class="subtitle">
          <div>
            The Good Place Inc. is a creative agency that specializes in brand
            marketing and digital experiences optimized for business success.
          </div>
        </div>
        <process :background-color="backgroundColor" />
      </div>
      <div class="services" ref="services">
        <services :background-color="backgroundColor" />
      </div>
      <div ref="projects" class="projects" :class="backgroundColor">
        <projects :background-color="backgroundColor" />
      </div>
      <div class="mission" ref="mission">
        <mission :background-color="backgroundColor" />
      </div>
      <div class="about" ref="about">
        <about :background-color="backgroundColor" />
      </div>
      <div class="contact inner" ref="contact">
        <contact />
      </div>
    </section>
  </div>
</template>
<script>
import introData from "@/lib/introData";
import Projects from "@/components/Projects.vue";
import About from "@/components/About.vue";
import Mission from "@/components/Mission.vue";
import Services from "@/components/Services.vue";
import Process from "@/components/Process.vue";
import MainMenu from "@/components/MainMenu.vue";
import Contact from "@/components/Contact.vue";
import IntroAnimation from "@/components/IntroAnimation.vue";

const bgColorSections = [];
const menuItems = [
  { name: `Services`, id: `services` },
  { id: `process` },
  { name: `Projects`, id: `projects` },
  { name: "About", id: `mission` },
  { id: `about` },
  { name: `Contact`, id: `contact` },
];
let BUBBLE_SIZE = 120;
let bgColorCheckTimeout, reqId;

export default {
  name: `home-view`,
  data() {
    return {
      introData,
      isPaused: false,
      backgroundColor: "services-color",
      bubbles: [
        { x: 759, y: 3800, size: 100 },
        { x: 163, y: 3406, size: 100 },
        { x: 813, y: 2712, size: 100 },
        { x: 348, y: 2418, size: 100 },
        { x: 771, y: 2378, size: 100 },
        { x: 863, y: 1706, size: 100 },
        { x: 153, y: 1680, size: 100 },
        { x: 777, y: 1292, size: 100 },
        { x: 345, y: 1038, size: 100 },
        { x: 762, y: 940, size: 100 },
        { x: 799, y: 580, size: 100 },
        { x: 837, y: 278, size: 100 },
        { x: 494, y: 120, size: 100 },
      ],
      logoVisible: false,
      bringToFront: false,
      bubbleCollapseY: 5000,
    };
  },
  components: {
    MainMenu,
    Services,
    Projects,
    About,
    Mission,
    Process,
    IntroAnimation,
    Contact,
  },
  computed: {
    nonEmptyMenuItems() {
      return menuItems.filter((m) => m.name);
    },
    menuItems() {
      return menuItems;
    },
    big() {
      return window.innerWidth > 650;
    },
  },
  mounted() {
    this.logoVisible = !this.big;
    this.bringToFront = false;
    if (document.readyState === "complete") {
      this.initSections();
    } else {
      window.addEventListener("load", this.initSections.bind(this));
    }
    window.addEventListener("scroll", this.bgColorCheck);
    if (this.$route.query.referer) {
      const section = bgColorSections.find(
        (m) => m.name === this.$route.query.referer
      );
      if (section) {
        window.scrollTo(0, section.top - 300);
      }
      this.$router.replace({ query: null });
    }
    this.bgColorCheck();
  },
  destroyed() {
    window.removeEventListener("scroll", this.bgColorCheck);
    window.cancelAnimationFrame(reqId);
    reqId = null;
  },
  methods: {
    initSections() {
      if (!bgColorSections.length) {
        const bgColorEls = this.$el.querySelectorAll("[data-project-class]");
        for (const bgColorEl of bgColorEls) {
          const rect = bgColorEl.getBoundingClientRect();
          bgColorSections.push({
            name: bgColorEl.getAttribute("data-project-class"),
            top: ~~(rect.top + window.scrollY + 300),
          });
        }
        for (const menuItem of menuItems) {
          const el = this.$refs[menuItem.id];
          if (el) {
            const rect = el.getBoundingClientRect();
            menuItem.y = ~~(rect.top + window.scrollY);
            bgColorSections.push({
              name: `${menuItem.id}-color`,
              top: menuItem.y + 500,
            });
            if (menuItem.id === "theo1841") {
              this.bubbleCollapseY = menuItem.y + 500;
            }
          }
        }
        bgColorSections.sort((a, b) => b.top - a.top);
      }
    },
    showLogo() {
      this.logoVisible = true;
    },
    createBubble(x) {
      // avoid siamese bubbles
      if (
        this.bubbles.some(
          (n) =>
            n.x + BUBBLE_SIZE * 1.3 > x &&
            n.x - BUBBLE_SIZE * 1.3 < x &&
            n.y < BUBBLE_SIZE
        )
      ) {
        return false;
      } else {
        this.bubbles.push({ x: x - 1, y: 0, size: 2 });
        return true;
      }
    },
    startAnimation() {
      this.bubbles.forEach((b, index) => {
        if (b.y > this.bubbleCollapseY) {
          this.bubbles.splice(index, 1);
          if (!this.big) {
            this.createBubble(b.x);
          }
        } else if (b.size < BUBBLE_SIZE) {
          b.size += 2;
          b.x--;
          // avoid off-screen bubbles
          if (b.x + b.size >= 1024) {
            b.x = 1024 - b.size;
          }
        }
        b.y += 2;
      });
      reqId = window.requestAnimationFrame(this.startAnimation.bind(this));
    },
    scale(value) {
      if (window.innerWidth < 1024) {
        return ~~((value * window.innerWidth) / 1024);
      }
      return value;
    },
    bgColorCheck() {
      if (!bgColorCheckTimeout) {
        bgColorCheckTimeout = setTimeout(() => {
          const y = window.scrollY + window.innerHeight;
          const currentBgColorSection = bgColorSections.find(
            (bcs) => y > bcs.top
          );
          const backgroundColor = currentBgColorSection
            ? currentBgColorSection.name
            : y < 2000
            ? `process-color`
            : `contact-color`;
          if (
            backgroundColor === `theo1841` &&
            this.backgroundColor === `services-color`
          ) {
            this.isPaused = true;
            window.cancelAnimationFrame(reqId);
            reqId = null;
          } else if (!reqId && this.backgroundWantsBubbles(backgroundColor)) {
            this.isPaused = false;
            this.startAnimation();
          }
          if (backgroundColor !== this.backgroundColor) {
            this.backgroundColor = backgroundColor;
          }
          bgColorCheckTimeout = null;
        }, 100);
      }
    },
    backgroundWantsBubbles(bgColor) {
      return [
        "about-color",
        "services-color",
        "mission-color",
        "process-color",
      ].includes(bgColor);
    },
  },
};
</script>
<style lang="scss" scoped>
.home-view {
  transition: all $project-transition-duration ease-in-out;
  color: #fff;
  padding: 0;
  &.theo1841 {
    background: $theo1841;
  }
  &.deer-tulum {
    background: $deer-tulum;
  }
  &.cpes {
    background: $cpes;
  }
  &.silex {
    background: $silex;
  }
  &.about-color {
    background: $about;
  }
  &.mission-color {
    background: $mission;
  }
  &.services-color {
    background: $services;
  }
  &.process-color {
    background: $process;
  }
  &.projects-color {
    background: $projects;
  }
  &.contact-color {
    background: $contact;
  }
}
.masthead {
  position: relative;
  margin: 0 20px;
  font-family: "Recoleta", Helvetica, Arial, sans-serif;
}
header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  .menu {
    font-family: "Sharp", Helvetica, Arial, sans-serif;
    position: relative;
    z-index: 200;
  }
}

.logo {
  position: absolute;
  top: 0;
  font-weight: 600;
  font-size: 60px;
  padding: 22px;
  z-index: 200;
  opacity: 0;
  div {
    height: 32px;
    font-size: 33px;
  }
  img {
    height: 19px;
  }
  &.show {
    opacity: 1;
  }
}
.bubbles {
  position: relative;
  .bubble {
    transition: background-color $project-transition-duration ease-in-out;
    position: absolute;
    border-radius: 100px;
    &.services-color {
      background: $services-accent;
    }
    &.process-color {
      background: $process-accent;
    }
  }
}
@media (min-width: 641px) {
  .logo {
    transition: opacity 3s ease-in-out;
  }
}

@media (max-width: 640px) {
  .masthead {
    padding: 50px 20px 30px;
    margin: 0;
  }
  .intro {
    img {
      width: calc(100% - 60px);
      padding: 50px 30px 30px 30px;
    }
  }
  .logo {
    font-size: 30px;
    padding: 25px 0 0 20px;
    img {
      height: 15px;
    }
  }
}
.subtitle {
  font-family: "Caluna", Helvetica, Arial, sans-serif;
  font-size: 22px;
  font-weight: 100;
  color: #fff;
  width: 480px;
  padding: 30px;
  text-align: center;
  background: #72316b;
  width: 100%;
  margin-bottom: 40px;
  div {
    position: relative;
    width: 420px;
    margin: 0 auto;
  }
}
</style>
