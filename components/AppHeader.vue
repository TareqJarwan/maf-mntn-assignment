<template>
  <div>
    <SocialMedia />
    <section class="app__header">
      <div class="app__header-bg">
        <div class="transition-group" />
        <img src="../assets/images/bg-image.webp" alt="bg-image" />
      </div>
      <div class="app__header-content">
        <div class="sub_title">
          <div />
          <p>A Hiking guide</p>
        </div>
        <h1 class="title">Be prepared for the Mountains and beyond!</h1>
        <div class="action">
          <p>scroll down</p>
          <img src="../assets/images/arrow_downward.svg" alt="arrow icon" />
        </div>
      </div>
    </section>
    <AppNavigation :active="Start" />
  </div>
</template>

<script>
import SocialMedia from "./SocialMedia.vue";
import AppNavigation from "./AppNavigation.vue";

export default {
  components: { SocialMedia, AppNavigation },
  name: "AppHeader",
};
</script>

<style>
.transition-group {
  position: absolute;
  bottom: 0;
  left: 0px;
  width: 100%;
  height: 200px;
  background: linear-gradient(180deg, rgba(11, 29, 38, 0) 30%, #0b1d26 100%);
}

.app__header {
  height: auto;
  width: 100%;
  z-index: 1;
  left: 0;
  top: -80px;
}

.app__header-bg {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  opacity: 0.5;

  position: relative;
  height: 217vh;
  background: linear-gradient(330deg, #0b1d26 31%, #0b1d26 100%);
}

.app__header-bg img {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  z-index: -1;
  width: 100%;
  height: auto;
  position: absolute;
  top: -400px;
  left: 0;
}

.app__header-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  position: absolute;
  max-width: 950px;
  height: 300px;
  left: 20%;
  top: 40%;
  z-index: 100;
  opacity: 1;
}

.app__header-content .sub_title {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;

  margin-bottom: 32px;
}

.app__header-content .sub_title div {
  width: 72px;
  border: 2px solid var(--color-accent);
  background: var(--color-accent);
  margin-right: 32px;
}

.app__header-content .sub_title p {
  font-family: var(--font-base);
  font-weight: 900;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: 6px;
  text-transform: uppercase;
  color: var(--color-accent);
}

.app__header-content .title {
  font-family: var(--font-base);
  font-weight: 900;
  font-size: 88px;
  line-height: 100px;
  text-transform: capitalize;
  color: var(--color-white);
  margin-bottom: 32px;
}

.app__header-content .action {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
}

.app__header-content .action:hover {
  border-bottom: 2px solid var(--color-accent);
}

.app__header-content .action p {
  font-family: var(--font-base);
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  color: var(--color-white);

  margin-right: 20px;
}

.app__header-content .action img {
  width: 16px;
  height: 24px;
}

@media screen and (min-width: 1700px) {
  .app__header {
    height: 186vh;
  }

  .app__header-bg {
    height: 217vh;
  }
}

@media screen and (max-width: 650px) {
  .app__header-bg {
    height: 75vh;
  }

  .app__header-content {
    width: 100%;
    height: 100%;
    left: 0;
    top: -19%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .app__header-content .sub_title {
    justify-content: center;
    margin-bottom: 10px;
  }

  .app__header-content .sub_title div {
    width: 48px;
    border: 2px solid var(--color-accent);
    background: var(--color-accent);
    margin-right: 32px;
  }

  .app__header-content .title {
    font-size: 36px;
    line-height: 60px;
  }
}

@media screen and (max-width: 500px) {
  .transition-group {
    bottom: -31%;
  }

  .app__header-bg {
    height: 55vh;
  }

  .app__header {
    height: 70vh;
  }

  .app__header-content .app__header-bg {
    height: 260vh;
  }

  .app__header-bg img {
    top: -70px;
  }
}
</style>
