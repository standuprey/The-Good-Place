<template>
  <div
    class="video-preview-component inner"
    :style="{ width: width + `px`, height: height + `px` }"
  >
    <img
      :src="backFrameSource"
      ref="frame"
      :height="height"
      :width="width"
      v-if="backFrameSource"
    />
    <div
      class="crop-zone"
      :style="{
        width: videoWidth + `px`,
        height: videoHeight + `px`,
        top: videoOffsetY + `px`,
        left: videoOffsetX + `px`,
      }"
    >
      <video
        autoplay
        playsinline
        loop
        muted
        v-if="isVideo"
        :src="mediaSource"
        :style="{
          width: videoFrameWidth + `px`,
          height: videoFrameHeight + `px`,
          top: videoFrameOffsetY + `px`,
          left: videoFrameOffsetX + `px`,
        }"
      />
      <img
        v-if="!isVideo"
        :src="mediaSource"
        :style="{
          width: videoFrameWidth + `px`,
          height: videoFrameHeight + `px`,
          top: videoFrameOffsetY + `px`,
          left: videoFrameOffsetX + `px`,
        }"
      />
    </div>
    <img
      :src="frontFrameSource"
      ref="frame"
      :height="height"
      :width="width"
      v-if="frontFrameSource"
    />
  </div>
</template>
<script>
const config = {
  mbp: {
    originalWidth: 1228,
    originalHeight: 714,
    videoOffsetX: 150,
    videoOffsetY: 30,
    videoHeight: 600,
    videoWidth: 923,
    backFrameSource: require(`@/assets/mbp.svg`),
  },
  iphonexBlack: {
    originalWidth: 463,
    originalHeight: 891,
    videoOffsetX: 24,
    videoOffsetY: 16,
    videoHeight: 803,
    videoWidth: 367,
    backFrameSource: require(`@/assets/iphonex_back_shadow.svg`),
    frontFrameSource: require(`@/assets/iphonex_black.svg`),
  },
  iphonexWhite: {
    originalWidth: 463,
    originalHeight: 891,
    videoOffsetX: 24,
    videoOffsetY: 16,
    videoHeight: 803,
    videoWidth: 367,
    videoFrameOffsetX: -102,
    videoFrameOffsetY: -208,
    videoFrameHeight: 1108,
    videoFrameWidth: 570,
    backFrameSource: require(`@/assets/iphonex_back_shadow.svg`),
    frontFrameSource: require(`@/assets/iphonex_white.svg`),
  },
  iphonexBlackIllustration: {
    originalWidth: 463,
    originalHeight: 891,
    videoOffsetX: 24,
    videoOffsetY: 16,
    videoHeight: 803,
    videoWidth: 367,
    videoFrameOffsetX: 0,
    videoFrameOffsetY: 0,
    videoFrameHeight: 801,
    videoFrameWidth: 363,
    backFrameSource: require(`@/assets/iphonex_back_shadow.svg`),
    frontFrameSource: require(`@/assets/iphonex_black.svg`),
  },
};

export default {
  name: "video-preview-component",
  props: [`frame`, `mediaSource`, `width`],
  computed: {
    ratio() {
      return this.width / config[this.frame].originalWidth;
    },
    height() {
      return config[this.frame].originalHeight * this.ratio;
    },
    videoHeight() {
      return config[this.frame].videoHeight * this.ratio;
    },
    videoWidth() {
      return config[this.frame].videoWidth * this.ratio;
    },
    videoOffsetX() {
      return config[this.frame].videoOffsetX * this.ratio;
    },
    videoOffsetY() {
      return config[this.frame].videoOffsetY * this.ratio;
    },
    videoFrameHeight() {
      return (
        config[this.frame].videoFrameHeight * this.ratio || this.videoHeight
      );
    },
    videoFrameWidth() {
      return config[this.frame].videoFrameWidth * this.ratio || this.videoWidth;
    },
    videoFrameOffsetX() {
      return (config[this.frame].videoFrameOffsetX || 0) * this.ratio;
    },
    videoFrameOffsetY() {
      return (config[this.frame].videoFrameOffsetY || 0) * this.ratio;
    },
    frontFrameSource() {
      return config[this.frame].frontFrameSource;
    },
    backFrameSource() {
      return config[this.frame].backFrameSource;
    },
    isVideo() {
      return this.mediaSource.indexOf(".mp4") > -1;
    },
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.video-preview-component {
  position: relative;
  > * {
    position: absolute;
    top: 0;
    left: 0;
  }
}
.crop-zone {
  overflow: hidden;
  > * {
    position: absolute;
  }
}
.test {
  background: #ff0;
}
</style>
