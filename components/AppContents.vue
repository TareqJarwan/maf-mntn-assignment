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

export default {
  name: "AppContents",

  components: { AppContent },

  data() {
    return {
      contents: [
        {
          title: "What level of  hiker are you?",
          subtitle: "GEt Started",
          description:
            "Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you - novice, moderate, advanced moderate, expert, or expert backpacker? ",
          image: "../assets/images/sec01.png",
          readMoreLink: "/",
        },
        {
          title: "Picking the right Hiking Gear!",
          subtitle: "Hiking Essentials",
          description:
            "The nice thing about beginning hiking is that you don't really need any special gear, you can probably get away with things you already have.Let’s start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe wif they get sweaty or wet.",
          image: "../assets/images/sec02.png",
          readMoreLink: "/",
        },
        {
          title: "Understand Your Map & Timing",
          subtitle: "where you go is the key",
          description:
            "To start, print out the hiking guide and map. If it's raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I'll read the guide and know that say, in a mile, I make a right turn at the junction..",
          image: "../assets/images/sec03.png",
          readMoreLink: "/",
        },
      ],
    };
  },
};
</script>

<style>
</style>
