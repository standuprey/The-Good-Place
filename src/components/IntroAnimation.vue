<template>
  <div class="intro-animation-component inner">
    <div class="title" ref="title" :class="{ show: showTitle }">
      {{ logoPart1 }}<img src="@/assets/tgp.svg" />{{ logoPart2 }}
    </div>
    <canvas ref="canvas" />
    <div class="tagline" :class="{ show: showTagline }" ref="tagline">
      <h1>
        <span>Brand &amp;</span><span>Marketing</span><span>Consulting</span>
      </h1>
    </div>
  </div>
</template>
<script>
import Matter, {
  Engine,
  Render,
  World,
  Bodies,
  Body,
  Events,
  Runner,
} from "matter-js";
import MatterAttractors from "matter-attractors";

let runner, engine, world, render, ratio;
let miniBallCount, animationState, date;
let miniBallsBodies, logoBodies;

export default {
  name: "intro-animation-component",
  data() {
    return {
      logoPart1: "",
      logoPart2: "",
      showTagline: false,
      showTitle: true,
    };
  },
  props: ["data", "doneCallback", "createBubble", "isPaused"],
  mounted() {
    miniBallCount = 3;
    date = Date.now();
    animationState = 0;
    runner, engine, world;
    miniBallsBodies = [];
    logoBodies = [];
    Matter.use(MatterAttractors);
    runner = Runner.create();
    engine = Engine.create();
    engine.enableSleeping = true;
    render = Render.create({
      canvas: this.$refs.canvas,
      engine,
      options: {
        wireframes: false,
        width: 1024,
        height: 900,
        background: "transparent",
      },
    });
    world = engine.world;
    if (this.data) {
      this.createBodies();
    }
    Runner.run(runner, engine);
    Render.run(render);
    this.setCanvasHeight();
  },
  destroyed() {
    Events.off(engine, "beforeUpdate", this.beforeUpdate);
    Render.stop(render);
    World.clear(world);
    Engine.clear(engine);
    // according to https://github.com/liabru/matter-js/issues/564
    render.canvas.remove();
    render.canvas = null;
    render.context = null;
    render.textures = {};
  },
  watch: {
    isPaused() {
      if (this.isPaused) {
        Runner.stop(runner);
      } else {
        Runner.run(runner, engine);
      }
    },
  },
  methods: {
    setCanvasHeight() {
      const canvasDimensions = this.$refs.canvas.getBoundingClientRect();
      if (canvasDimensions.width < 1024) {
        ratio = canvasDimensions.width / 1024;
        this.$refs.canvas.style.height = `${~~(900 * ratio)}px`;
        this.$refs.tagline.style.transform = `scale(${ratio})`;
        this.$refs.title.style.transform = `scale(${ratio})`;
      }
    },
    createBodies() {
      const attractionPower = this.data.attractionPower;
      const frictionAir = this.data.frictionAir;
      let index = 1;
      for (const ball of this.data.balls.sequence1) {
        const name = `logoball${index++}`;
        const attractiveBody = Bodies.circle(ball.end.x, ball.end.y, 0, {
          isStatic: true,
          plugin: {
            attractors: [
              function (bodyA, bodyB) {
                if (bodyB.name === name) {
                  return {
                    x: (bodyA.position.x - bodyB.position.x) * attractionPower,
                    y: (bodyA.position.y - bodyB.position.y) * attractionPower,
                  };
                } else {
                  return {
                    x: 0,
                    y: 0,
                  };
                }
              },
            ],
          },
        });
        World.add(world, attractiveBody);
        const body = Bodies.circle(ball.start.x, ball.start.y, ball.size, {
          collisionFilter: {
            group: -1,
          },
          frictionAir,
          density: ball.density || 0.001,
          render: {
            fillStyle: ball.color,
            sprite: {
              texture: ball.image,
            },
          },
          name,
          isVolatile: ball.isVolatile,
        });
        Body.setVelocity(body, ball.shoot);
        logoBodies.push(body);
        World.add(world, body);
      }
      world.gravity.y = 0.2;
      world.gravity.x = 0;
      Events.on(engine, "beforeUpdate", this.beforeUpdate);
      // Uncomment to add a grid
      // Events.on(render, 'afterRender', function() {
      //   const ctx = this.context
      //   for (let i = 0; i < 910; i += 20) {
      //     ctx.beginPath()
      //     ctx.strokeStyle = i % 100 ? "#999" : "#fff"
      //     ctx.moveTo(0, i)
      //     ctx.lineTo(900, i)
      //     ctx.moveTo(i, 0)
      //     ctx.lineTo(i, 900)
      //     ctx.stroke()
      //   }
      // })
    },
    showLogo() {
      this.doneCallback();
    },
    miniBalls() {
      for (let i = 0; i < miniBallCount; i++) {
        const body = Bodies.circle(450 + i * 25, -i * 500, 8, {
          density: 10,
          render: { fillStyle: "#CDB1FA" },
        });
        miniBallsBodies.push(body);
        World.add(world, body);
      }
    },
    getRandomXPosition() {
      return ~~(Math.random() * 624) + 200;
    },
    getRandomXVelocity(x) {
      const factor = x < 312 ? 0 : x > 712 ? 8 : 5;
      return ~~(Math.random() * 8) - factor;
    },
    writeTagLine() {
      this.showTagline = true;
    },
    beforeUpdate() {
      if (date) {
        let index = 0;
        for (const step in this.data.steps) {
          if (
            Date.now() - date > this.data.steps[step] &&
            animationState === index
          ) {
            animationState++;
            if (animationState === Object.keys(this.data.steps).length) {
              date = null;
            }
            this[step](engine);
          }
          index++;
        }
      }
      for (const ball of miniBallsBodies) {
        if (
          ball.position.y > 900 ||
          ball.position.y < -100 ||
          ball.position.x < -100 ||
          ball.position.x > 1024
        ) {
          let needBounce = false;
          if (ball.position.y > 900 || ball.position.y < -100) {
            needBounce =
              !this.createBubble(~~ball.position.x) &&
              ball.position.x > 0 &&
              ball.position.x < 1024;
          }
          if (needBounce) {
            Body.setVelocity(ball, {
              x: this.getRandomXVelocity(ball.position.x),
              y: -9,
            });
          } else {
            Body.setPosition(ball, {
              x: this.getRandomXPosition(),
              y: -10,
            });
            Body.setVelocity(ball, {
              x: this.getRandomXVelocity(ball.position.x),
              y: 0,
            });
          }
        }
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.intro-animation-component {
  position: relative;
}
.object {
  position: absolute;
}
.ball {
  box-shadow: inset 2px 2px 30px rgba(0, 0, 0, 0.2);
}
canvas {
  display: block;
  position: relative;
  height: 900px;
  width: 1024px;
  max-width: 100%;
  margin: 0 auto;
  z-index: 100;
}
.title {
  position: absolute;
  top: 0;
  left: 0;
  padding: 147px 0 0 46px;
  font-weight: 600;
  font-size: 140px;
  color: #fff;
  opacity: 0;
  &.show {
    opacity: 1;
  }
  img {
    height: 82px;
    opacity: 0;
  }
}
.tagline {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  transition: opacity 3s;
  opacity: 0;
  h1 {
    padding: 292px 100px 0 260px;
    font-weight: 600;
    font-size: 94px;
    line-height: 0.8;
    text-align: left;
    color: #fff;
    span {
      display: block;
    }
  }
  &.show {
    opacity: 1;
  }
}
@media (max-width: 640px) {
  canvas {
    width: 100%;
  }
  .title,
  .tagline {
    transform-origin: top left;
    width: 1000px;
  }
}
</style>
