<template>
  <div>
    <SocialMedia />
    <div
      class="app__content"
      :class="[id % 2 == 0 ? '' : 'flex-wrap']"
      :id="id + 1"
    >
      <div class="app__content-img" v-show="id % 2 == 1">
        <img :src="image" alt="" />
      </div>

      <div class="app__content-container">
        <h1 class="number">{{ leadingZeros(id + 1, 2) }}</h1>
        <div class="sub_title">
          <div />
          <p>{{ content.subtitle }}</p>
        </div>
        <h1 class="title">{{ content.title }}</h1>
        <p class="description">{{ content.description }}</p>
        <div class="action">
          <p>read more</p>
          <img src="../assets/images/arrow_right.svg" alt="arrow icon" />
        </div>
      </div>

      <div class="app__content-img" v-show="id % 2 == 0">
        <img :src="image" alt="" />
      </div>
    </div>
    <AppNavigation :active="id" />
  </div>
</template>

<script>
import SocialMedia from "./SocialMedia.vue";
import AppNavigation from "./AppNavigation.vue";
export default {
  name: "AppContent",
  components: { SocialMedia, AppNavigation },
  props: ["content", "id"],
  data: function () {
    return {
      image: require("../assets/images/sec0" + (this.id + 1) + ".webp"),
    };
  },
  methods: {
    leadingZeros(num, places) {
      var zero = places - num.toString().length + 1;
      return Array(+(zero > 0 && zero)).join("0") + num;
    },
  },
};
</script>

<style>
.app__content {
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 120px 180px;
}

.app__content-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  position: relative;
  max-width: 630px;
}

.app__content-container .number {
  font-family: var(--font-base);
  font-weight: 700;
  font-size: 180px;
  line-height: 180px;
  color: var(--color-white);
  opacity: 0.1;

  position: absolute;
  top: -16%;
  left: -20%;
}

.app__content-container .sub_title {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.app__content-container .sub_title div {
  width: 72px;
  border: 2px solid var(--color-accent);
  background: var(--color-accent);
  margin-right: 24px;
}

.app__content-container .sub_title p {
  font-family: var(--font-base);
  font-weight: 900;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: 6px;
  text-transform: uppercase;
  color: var(--color-accent);
}

.app__content-container .title {
  font-family: var(--font-base);
  font-weight: 900;
  text-transform: capitalize;
  color: var(--color-white);
  margin-bottom: 32px;
  font-size: 64px;
  line-height: 75px;
  margin: 27px 0;
  max-width: 555px;
}

.app__content-container .description {
  font-family: var(--font-base);
  font-weight: 700;
  font-size: 18px;
  line-height: 32px;
  color: var(--color-white);
  max-width: 630px;
}

.app__content-container .action {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;

  margin-top: 27px;
}

.app__content-container .action p {
  font-family: var(--font-base);
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  color: var(--color-accent);
  margin-right: 20px;
}
.app__content-container .action img {
  width: 16px;
  height: 24px;
}

.app__content-container .action:hover {
  border-bottom: 2px solid var(--color-accent);
}

.app__content-img {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  max-width: 400px;
  height: 500px;

  margin-bottom: 70px;
}

.app__content-img img {
  width: 100%;
  height: 100%;
}

@media screen and (min-width: 2000px) {
  .app__content {
    margin: 200px 230px;
  }

  .app__content-container .number {
    font-size: 240px;
    line-height: 240px;
    top: -25%;
  }

  .app__content-img {
    width: 570px;
    height: 720px;
  }
}

@media screen and (max-width: 1024px) {
  .app__content {
    margin: 0px 120px;
  }

  .app__content-container .number {
    font-size: 120px;
    line-height: 120px;
    top: -14%;
  }

  .app__content-container .sub_title p {
    font-size: 16px;
    line-height: 18px;
    letter-spacing: 0.14em;
    margin-right: 10px;
  }

  .app__content-container .title {
    font-size: 36px;
    line-height: 40px;
    margin: 20px 0;
  }

  .app__content-container .description {
    font-size: 16px;
    line-height: 24px;
    max-width: 100%;
  }

  .app__content-img {
    width: 300px;
    height: 400px;
  }

  .app__content-container .action p {
    font-size: 16px;
    line-height: 18px;
    margin-right: 10px;
  }

  .app__content-container .description {
    font-size: 16px;
    line-height: 24px;
    max-width: 100%;
  }

  .app__content-container .action p {
    font-size: 16px;
    line-height: 18px;
    margin-right: 10px;
  }
}

@media screen and (max-width: 786px) {
  .app__content {
    margin: 0px 80px;
  }

  .app__content-container .number {
    font-size: 100px;
    line-height: 100px;
    top: -9%;
  }

  .app__content-container .sub_title p {
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.04em;
    margin-right: 10px;
  }

  .app__content-container .sub_title div {
    width: 48px;
  }

  .app__content-container .title {
    font-size: 36px;
    line-height: 40px;
    margin: 20px 0;
  }

  .app__content-container .description {
    font-size: 16px;
    line-height: 24px;
    max-width: 100%;
  }

  .app__content-img {
    width: 250px;
    height: 350px;
  }

  .app__content-container .action p {
    font-size: 16px;
    line-height: 24px;
    margin-right: 10px;
  }

  .app__content-container .description {
    font-size: 16px;
    line-height: 24px;
    max-width: 100%;
  }

  .app__content-container .action p {
    font-size: 16px;
    line-height: 18px;
    margin-right: 10px;
  }
}

@media screen and (max-width: 500px) {
  .app__content {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: 10rem 3rem 15rem;
  }

  .app__content-container {
    max-width: 100%;
  }

  .app__content-container .description {
    font-size: 16px;
    line-height: 24px;
    max-width: 100%;
  }

  .app__content-container .action p {
    font-size: 16px;
    line-height: 18px;
    margin-right: 10px;
  }

  .app__content-container .number {
    font-size: 120px;
    line-height: 120px;
    top: -13%;
    left: 30%;
  }

  .app__content-container .sub_title {
    margin-bottom: 25px;
  }

  .app__content-container .sub_title div {
    width: 48px;
    margin-right: 12px;
  }

  .app__content-img {
    margin-top: 20px;
  }

  .app__content-img {
    width: 100%;
    height: auto;
  }
}
</style>
