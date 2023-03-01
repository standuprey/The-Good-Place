<template>
  <canvas class="trail-animation-component" width="600" height="600"/>
</template>
<script>
let reqId, canvasEl, ctx, lastTime
const cycle = 30
const step = 0.02
const trailSize = 0.005
const counterLimit = 120
const opacityStepCount = 40
let position = 0
let counter = 0
let paused = false

export default {
  name: `trail-animation-component`,
  props: [ 'isPaused' ],
  watch: {
    isPaused() {
      if (this.isPaused && reqId) {
        window.cancelAnimationFrame(reqId)
        ctx.clearRect(0,0,600,680)
        reqId = null
      } else if (!this.isPaused && !reqId) {
        lastTime = Date.now()
        reqId = window.requestAnimationFrame(this.animationLoop)
      }
    },
  },
  mounted() {
    canvasEl = this.$el
    ctx = canvasEl.getContext(`2d`)
    ctx.lineWidth = 20
  },
  methods: {
    animationLoop() {
      reqId = window.requestAnimationFrame(this.animationLoop)
      var newTime = Date.now()
      if (newTime - lastTime > cycle) {
        ctx.clearRect(0,0,600,680)
        lastTime = newTime
        if (!paused) {
          showRedTrail()
        }
        if (counter++ == counterLimit) {
          counter = 0
          // paused = !paused
        }
      }
    },
  }
}
function showRedTrail() {
  const opacity = fadeEffect()
  for (let i = 0; i < opacityStepCount; i++) {
    showRedTrailPart(opacity * (1 - i / opacityStepCount) , -i)
  }
  position += step
  if (position >= 1) position -= 1
}
function fadeEffect() {
    if (counter > counterLimit * 0.5) {
      return 1 - (counter - counterLimit * 0.5) / (counterLimit * 0.5)
    } else {
      return counter / (counterLimit * 0.5)
    }
}

function showRedTrailPart(opacity, offset){
  var trailPos = position + trailSize * offset
  var startAngle = (trailPos * 360) % 360
  var stopAngle = ((trailPos + trailSize) * 360) % 360
  ctx.strokeStyle = `hsla(${~~((startAngle * 255) / 360)}, 100%, 50%, ${opacity})`
  ctx.beginPath()
  ctx.arc(300, 300, 270, startAngle * 2 * Math.PI / 360, stopAngle * 2 * Math.PI / 360, false) 
  ctx.stroke()
}

</script>
<style lang="scss" scoped>
.trail-animation-component {
  position: absolute;
  width: 600px;
  height: 600px;
  left: 212px;
  top: 330px;
}
</style>