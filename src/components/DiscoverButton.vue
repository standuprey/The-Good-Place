<template>
  <div class="discover-button-component" :class="backgroundColor">
    <div class="triangle" />
    <svg
      width="45px"
      height="35px"
      viewBox="0 0 45 35"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <g id="Group">
        <path
          d="M30.6341507,21.7465714 C27.8647808,18.6568571 25.0288082,17.0897143 22.2084384,17.0897143 C17.3853288,17.0897143 14.3735342,21.6171429 14.2484795,21.8114286 C14.1010685,22.0357143 14.1176027,22.3611429 14.2845753,22.5625714 C16.6901918,25.4605714 19.3438219,26.9268571 22.1718767,26.9268571 C26.9616849,26.9268571 30.4986164,22.7417143 30.6460274,22.5625714 C30.7366164,22.4537143 30.7862192,22.306 30.7829589,22.1508571 C30.7815616,21.9977143 30.7275342,21.85 30.6341507,21.7465714 Z M22.1721096,25.8051429 C19.713863,25.8051429 17.3836986,24.5702857 15.2414658,22.1305714 C16.057,21.0785714 18.6081644,18.212 22.2079726,18.212 C24.6676164,18.212 27.1647534,19.5408571 29.636274,22.162 C28.642589,23.1825714 25.7407123,25.8051429 22.1721096,25.8051429 Z"
          id="Shape"
          fill="#FAF6F6"
          fill-rule="nonzero"
        ></path>
        <path
          d="M19.4220685,22.0088571 C19.4220685,23.8934286 20.6679589,25.4211429 22.2035479,25.4211429 C23.739137,25.4211429 24.9850274,23.8931429 24.9850274,22.0088571 C24.9850274,20.1242857 23.739137,18.5954286 22.2035479,18.5954286 C20.6679589,18.5954286 19.4220685,20.1242857 19.4220685,22.0088571 Z M21.4727808,23.2711429 C21.4727808,23.5517143 21.2876438,23.7788571 21.0589589,23.7788571 C20.9448493,23.7788571 20.8407534,23.7214286 20.7655342,23.6294286 C20.6905479,23.5391429 20.6437397,23.4111429 20.6437397,23.2711429 L20.6437397,23.2191429 C20.6437397,22.9391429 20.8307397,22.712 21.0589589,22.712 C21.1733014,22.712 21.2773973,22.7688571 21.3509863,22.8614286 C21.4259726,22.9511429 21.4727808,23.0791429 21.4727808,23.2191429 L21.4727808,23.2711429 Z M22.7272877,21.0305714 C22.8912329,21.0305714 23.0388767,21.1114286 23.1471644,21.2442857 C23.2538219,21.3754286 23.3201918,21.5585714 23.3201918,21.7594286 L23.3201918,21.8337143 C23.3201918,22.2354286 23.0549452,22.5608571 22.7272877,22.5608571 C22.5633425,22.5608571 22.4140685,22.4794286 22.3076438,22.3482857 C22.1988904,22.2154286 22.1329863,22.0345714 22.1329863,21.8337143 L22.1329863,21.7594286 C22.1329863,21.3571429 22.3993973,21.0305714 22.7272877,21.0305714 Z"
          id="Shape"
          fill="#FAF6F6"
          fill-rule="nonzero"
        ></path>
      </g>
    </svg>
    <span>Discover</span>
  </div>
</template>
<script>
export default {
  name: `discover-button-component`,
  props: [`backgroundColor`],
};
</script>
<style lang="scss" scoped>
.triangle {
  width: 0;
  height: 0;
  border-left: 22px solid transparent;
  border-right: 22px solid transparent;
  position: absolute;
  left: 50%;
  margin-left: -22px;
  transition: border-color $project-transition-duration ease-in-out;
  border-bottom: 34px solid transparent;
}
.discover-button-component {
  position: relative;
  padding: 10px 0;
  width: 250px;
  color: #fff;
  text-align: center;
  font-size: 22px;
  display: block;
  text-transform: uppercase;
  margin: 0 auto;
  cursor: pointer;
  transition: all $project-transition-duration ease-in-out;
}
.theo1841 {
  background: $theo1841;
  .triangle {
    border-bottom: 34px solid $theo1841-accent-2;
  }
}
.silex {
  background: $silex;
  .triangle {
    border-bottom: 34px solid $silex-accent-2;
  }
}
.deer-tulum {
  background: $deer-tulum;
  .triangle {
    border-bottom: 34px solid $deer-tulum-accent-2;
  }
}
.cpes {
  background: $cpes;
  .triangle {
    border-bottom: 34px solid $cpes-accent-2;
  }
}
svg {
  position: relative;
  display: block;
  width: 45px;
  margin: 0 auto 10px;
}
@media (max-width: 640px) {
  .discover-button-component {
    background: transparent;
    font-size: 15px;
  }
}
</style>
