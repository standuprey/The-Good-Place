<template>
  <div class="projects-component">
    <project
      description=" Introducing a premium organic chocolate brand that features clean ingredients and superior flavor."
      name="THEO1841"
      mediaSource="theo.webm"
      project="theo1841"
    />
    <project
      description="Helping a lifestyle brand transition to an omnichannel strategy while searching for the right investors to take the brand international."
      name="Deer Tulum"
      mediaSource="deer.webm"
      project="deer-tulum"
      :reverse="true"
    />
    <project
      description="Creating visual identity and merchandise for Cannabis Political Economic Symposium (CPES) in Washington DC."
      name="CPES"
      mediaSource="cpes.webm"
      project="cpes"
    />
    <project
      description="Re-launching the cryptocurrency exchange platform's website and user experience."
      name="Silex Terminal"
      mediaSource="silex.webm"
      project="silex"
      :reverse="true"
    />
  </div>
</template>
<script>
import Project from "@/components/Project.vue";

export default {
  name: `projects-component`,
  components: { Project },
};
</script>
<style lang="scss" scoped>
.projects-component {
  padding-bottom: 100px;
}
</style>
