<template>
  <div class="container">
    <AppNavbar />
    <nuxt />
  </div>
</template>

<script>
import AppNavbar from "../components/AppNavbar";
export default {
  components: {
    AppNavbar,
  },
};
</script>

<style>
@font-face {
  font-family: "Roboto";
  src: url("../assets/fonts/Roboto/Roboto-Regular.eot");
  src: url("../assets/fonts/Roboto/Roboto-Regular.eot?#iefix")
      format("embedded-opentype"),
    url("../assets/fonts/Roboto/Roboto-Regular.woff2") format("woff2"),
    url("../assets/fonts/Roboto/Roboto-Regular.woff") format("woff"),
    url("../assets/fonts/Roboto/Roboto-Regular.ttf") format("truetype"),
    url("../assets/fonts/Roboto/Roboto-Regular.svg#Roboto-Regular")
      format("svg");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Larsseit";
  src: url("../assets/fonts/Larsseit/Larsseit-Bold.eot");
  src: url("../assets/fonts/Larsseit/Larsseit-Bold.eot?#iefix")
      format("embedded-opentype"),
    url("../assets/fonts/Larsseit/Larsseit-Bold.woff2") format("woff2"),
    url("../assets/fonts/Larsseit/Larsseit-Bold.woff") format("woff"),
    url("../assets/fonts/Larsseit/Larsseit-Bold.ttf") format("truetype"),
    url("../assets/fonts/Larsseit/Larsseit-Bold.svg#Larsseit-Bold")
      format("svg");
  font-weight: bold;
  font-style: normal;
  font-display: swap;
}

:root {
  --font-base: "Roboto", sans-serif;
  --font-button: "Larsseit", sans-serif;

  --color-black: #000000;
  --color-dark-gray: #0b1d26;
  --color-accent: #fbd784;
  --color-white: #ffffff;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-base);
  font-size: 1rem;
  line-height: 1.6;
  background: var(--color-dark-gray);

  overflow-x: hidden;
}

a {
  color: var(--color-white);
  text-decoration: none;
}

ul {
  list-style: none;
}

.container {
  width: 100%;
  overflow: hidden;
}

.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.flex-reverse {
  flex-wrap: wrap-reverse;
}

.flex-wrap {
  flex-wrap: wrap;
}
</style>
