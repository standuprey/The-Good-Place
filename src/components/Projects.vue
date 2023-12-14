<template>
  <div class="projects-component">
    <project
      description=" Introducing a premium organic chocolate brand that features clean ingredients and superior flavor."
      name="THEO1841"
      :mediaSource="theoCover"
      project="theo1841"
    />
    <project
      description="Helping a lifestyle brand transition to an omnichannel strategy while searching for the right investors to take the brand international."
      name="Deer Tulum"
      :mediaSource="deerTulumCover"
      project="deer-tulum"
      :reverse="true"
    />
    <project
      description="Creating visual identity and merchandise for Cannabis Political Economic Symposium (CPES) in Washington DC."
      name="CPES"
      :mediaSource="cpesCover"
      project="cpes"
    />
    <project
      description="Re-launching the cryptocurrency exchange platform's website and user experience."
      name="Silex Terminal"
      :mediaSource="silexCover"
      project="silex"
      :reverse="true"
    />
  </div>
</template>
<script>
import Project from "@/components/Project.vue";
import theoCover from "@/assets/projects/theo1841/homeCover.png"
import silexCover from "@/assets/projects/silex/homeCover.png"
import deerTulumCover from "@/assets/projects/deer-tulum/homeCover.jpg"
import cpesCover from "@/assets/projects/cpes/homeCover.jpg"

export default {
  name: `projects-component`,
  components: { Project },
  data: function () {
    return {
      theoCover,
      silexCover,
      deerTulumCover,
      cpesCover
    }
  }
};
</script>
<style lang="scss" scoped>
.projects-component {
  padding-bottom: 100px;
}
</style>
