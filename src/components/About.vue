<template>
  <div class="about-component inner">
    <div class="left-pan">
      <div
        class="highlight"
        ref="aboutHighlight"
        :class="{ show: showAboutHighlight }"
      >
        We believe in propelling creativity, doing great work that focuses on
        quality, value, and collaboration
        <div class="closing"></div>
      </div>
    </div>
    <div class="right-pan">
      <h2>We&apos;re The Good People!</h2>
      <div class="intro">
        We are dedicated to building brands, we believe any brand worth an
        audience&apos;s time must communicate with meaning and purpose. We
        inject both into every aspect of our work. We use market data and trends
        to develop strategies that will guide them in creating more effective
        brand marketing plans for products or services, as well as enhancing
        what already exists with current brands.<br /><br />We are driven by
        curiosity and walking the path of discovery with our clients, meeting
        our customers where they are, talking to them with honesty, and always
        adding value to their lives.
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: `about-component`,
  props: [`backgroundColor`],
  computed: {
    showAboutHighlight() {
      return this.backgroundColor === `about-color`;
    },
  },
};
</script>
<style lang="scss" scoped>
.about-component {
  padding-bottom: 250px;
}
.closing {
  position: relative;
  display: inline-block;
  &:before {
    position: absolute;
    top: -18px;
    left: 5px;
    content: "”";
    font-family: "Sharp";
    font-weight: 100;
    font-size: 70px;
  }
}
@media (min-width: 651px) {
  .about-component {
    overflow: hidden;
    .left-pan {
      width: 40%;
      margin: 0;
      padding: 0;
      .highlight {
        position: absolute;
        left: 30px;
        top: 70px;
        height: 396px;
        display: block;
        width: 280px;
        transition: all 1s ease-out;
        font-family: "Caslon Two";
        position: relative;
        margin: 0;
        opacity: 0;
        font-size: 32px;
        &.show {
          left: 50px;
          opacity: 1;
        }
        &:before {
          font-family: "Sharp";
          font-weight: 100;
          position: absolute;
          content: "“";
          left: -40px;
          top: -15px;
          font-size: 70px;
        }
      }
    }
    .right-pan {
      margin: 0;
      padding: 0 0 50px 0;
      width: 60%;
      h2 {
        text-align: left;
        padding-bottom: 20px;
      }
      .intro {
        line-height: 2;
        margin-bottom: 50px;
        font-size: 22px;
        text-align: justify;
      }
      .people {
        overflow: hidden;
        > div {
          width: 50%;
          float: left;
          box-sizing: border-box;
          &:first-child {
            padding-right: 20px;
          }
          &:last-child {
            padding-left: 20px;
          }
        }
        img {
          width: 100px;
          margin: 0 auto;
          display: block;
        }
        .name {
          font-family: "Caslon Two";
          font-size: 22px;
          text-align: center;
          padding: 15px 0 10px;
        }
        .description {
          font-weight: 100;
          line-height: 2;
          text-align: justify;
          font-size: 20px;
        }
      }
    }
  }
}
@media (max-width: 650px) {
  .about-component {
    .left-pan {
      margin: 0;
      padding: 0;
      .highlight {
        display: block;
        width: calc(100% - 60px);
        transition: all 1s ease-out;
        font-family: "Caslon Two";
        font-size: 28px;
        margin: 40px 0 20px 40px;
        &:before {
          transition: all 1s ease-out;
          font-family: "Sharp";
          font-weight: 100;
          position: absolute;
          content: "“";
          left: 10px;
          top: -15px;
          font-size: 70px;
        }
      }
    }
    .right-pan {
      margin: 0 20px;
      padding: 0 0 50px 0;
      h2 {
        text-align: center;
        padding: 20px 0;
      }
      .intro {
        line-height: 2;
        margin-bottom: 20px;
        font-size: 20px;
        text-align: justify;
      }
      .people {
        > div {
          padding: 20px 0;
        }
        img {
          width: 100px;
          margin: 0 auto;
          display: block;
        }
        .name {
          font-family: "Caslon Two";
          font-size: 22px;
          text-align: center;
          padding: 15px 0 10px;
        }
        .description {
          font-weight: 100;
          line-height: 2;
          text-align: justify;
        }
      }
    }
  }
}
</style>
