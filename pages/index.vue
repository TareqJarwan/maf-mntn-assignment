<template>
  <div>
    <app-header />
    <AppContents />
  </div>
</template>

<script>
import AppHeader from "../components/AppHeader.vue";
import AppContents from "../components/AppContents.vue";

export default {
  components: { AppHeader, AppContents },
  name: "IndexPage",
};
</script>
