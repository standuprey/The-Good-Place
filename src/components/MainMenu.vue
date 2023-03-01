<template>
  <div class="main-menu-component">
    <nav v-if="!showHamburger">
      <ul>
        <li
          v-for="menuItem in menuItems"
          :key="menuItem.id"
          @click.stop.prevent="scrollTo(menuItem.y)"
        >
          {{ menuItem.name }}
        </li>
      </ul>
    </nav>
    <div
      class="hamburger"
      v-if="showHamburger"
      :class="{ open: isMenuOpen }"
      @click.stop.prevent="toggleMenu"
    >
      <div class="pill" @click.stop.prevent="toggleMenu"></div>
      <div class="patties"></div>
      <ul>
        <li
          v-for="menuItem in menuItems"
          :key="menuItem.id"
          @click="scrollTo(menuItem.y)"
        >
          {{ menuItem.name }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { isMobile } from "@/lib/utils";
export default {
  name: `main-menu-component`,
  props: [`menuItems`],
  data() {
    return {
      isMenuOpen: false,
      showHamburger: false,
    };
  },
  mounted() {
    window.addEventListener("click", this.closeMenu);
    window.addEventListener("scroll", this.checkDisplayType);
    this.checkDisplayType();
  },
  destroyed() {
    window.removeEventListener("click", this.closeMenu);
    window.removeEventListener("scroll", this.checkDisplayType);
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      if (this.isMenuOpen) this.isMenuOpen = false;
    },
    scrollTo(yOffset) {
      window.scrollBy({
        top: yOffset - window.scrollY,
        left: 0,
        behavior: `smooth`,
      });
    },
    checkDisplayType() {
      const showHamburger = window.scrollY > 100 || isMobile();
      if (showHamburger !== this.showHamburger) {
        this.showHamburger = showHamburger;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
nav {
  float: right;
  ul {
    position: relative;
    overflow: hidden;
    padding-top: 58px;
  }
  li {
    float: left;
    margin: 0 10px;
    font-weight: 100;
    font-size: 25px;
    color: #fff;
    cursor: pointer;
  }
}
.hamburger {
  position: relative;
  z-index: 100;
  cursor: pointer;
  .pill {
    position: fixed;
    top: 10px;
    right: 10px;
    width: 70px;
    height: 70px;
    border-radius: 35px;
    transition: all 0.4s ease;
  }
  .patties {
    transition: all 0.2s ease;
    position: fixed;
    top: 10px;
    right: 10px;
    display: block;
    width: 35px;
    height: 8px;
    margin: 20px 17px;
    border-top: 4px solid #fff;
    border-bottom: 4px solid #fff;
    &:before {
      transition: all 0.2s ease;
      content: "";
      position: absolute;
      top: 20px;
      left: 0px;
      width: 100%;
      border-top: 4px solid #fff;
    }
  }
  ul {
    transition: all 0.8s ease;
    position: fixed;
    top: 90px;
    right: -20px;
    text-align: right;
    opacity: 0;
    li {
      font-size: 27px;
      color: #fff;
      line-height: 1.2;
    }
  }
  &.open {
    .pill {
      background: $color-4;
    }
    .patties {
      &,
      &:before {
        border-color: #fff;
      }
    }
  }
  &.open {
    .pill {
      top: -85px;
      right: -190px;
      width: 400px;
      height: 400px;
      border-radius: 330px;
    }
    .patties {
      transform: rotate(45deg);
      border-bottom: 0;
      top: 20px;
      right: 15px;
      &:before {
        transform: rotate(-90deg);
        top: -4px;
      }
    }
    ul {
      opacity: 1;
      right: 30px;
    }
  }
}
@media (min-width: 651px) {
  nav {
    li {
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .hamburger {
    ul {
      li {
        &:hover {
          text-decoration: underline;
        }
      }
    }
    &:hover {
      .pill {
        background: $color-4;
      }
      .patties {
        &,
        &:before {
          border-color: #fff;
        }
      }
    }
  }
}
</style>
