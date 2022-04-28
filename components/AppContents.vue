<template>
  <div class="app_contents">
    <app-content
      v-for="(content, index) in contents"
      :id="index"
      :key="index"
      :content="content"
    />
  </div>
</template>

<script>
import AppContent from "./AppContent.vue";
import usersData from "../assets/data/content.json";

export default {
  name: "AppContents",

  components: { AppContent },

  data() {
    return {
      contents: usersData,
    };
  },
};
</script>

<style>
</style>
