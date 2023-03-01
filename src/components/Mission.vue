<template>
  <div class="mission-component inner">
    <h2>What we're about</h2>
    <manifesto-icon :show="showValues" />
    <div ref="whatWereAbout" class="left-pan" :class="{ show: showValues }">
      <h4>Our <span>Passion</span></h4>
      <p>
        We develop creative solutions that are results driven, integrating new
        technologies and always looking for the opportunity to build unique
        experiences.
      </p>
      <h4>Our <span>Approach</span></h4>
      <p>
        We get to know our clients, their goals, and their expectations. We
        gather our findings to create actionable frameworks that deliver a
        brand’s design architecture that is then carefully implemented. The
        process continues with measurement and evaluation to continue to improve
        and surpass the level of excellence we strive for in every project.
      </p>
    </div>
    <div class="right-pan" :class="{ show: showValues }">
      <h4>Our <span>Vision</span></h4>
      <p>
        We bring together a network of independent professionals and create for
        each project a team composed of the most adapted skills to your needs.
        When you work with us, we&apos;ll make your objectives our own and
        integrate seamlessly with your in-house team to achieve your goals.
        We&apos;re only successful if you&apos;re successful. It's that simple.
      </p>
      <h4>Our <span>Impact</span></h4>
      <p>
        Being independent is a strength for our collaborators who are free to
        commit to the projects for which they really want to work. For our
        customers, it's the advantage of having a motivated team and focus.
      </p>
    </div>
  </div>
</template>
<script>
import ManifestoIcon from "@/components/ManifestoIcon.vue";

export default {
  name: `mission-component`,
  props: [`backgroundColor`],
  components: { ManifestoIcon },
  computed: {
    showValues() {
      return this.backgroundColor != `about-color`;
    },
  },
};
</script>
<style lang="scss" scoped>
.mission-component {
  overflow: hidden;
  p {
    line-height: 1.5;
    font-size: 18px;
    font-weight: 100;
    text-align: justify;
  }
  .manifesto {
    width: 50px;
    display: block;
    margin: 0 auto;
  }
  .left-pan,
  .right-pan {
    transition: all 1s ease-out;
    opacity: 0;
    &.show {
      padding-top: 0;
      opacity: 1;
    }
  }
}
@media (min-width: 651px) {
  .left-pan {
    border-right: 1px solid #fff;
  }
  .left-pan,
  .right-pan {
    padding-top: 40px;
  }
  p {
    height: 200px;
  }
}
@media (max-width: 650px) {
  .mission-component {
    margin: 0 20px;
    width: calc(100% - 40px);
  }
}
</style>
