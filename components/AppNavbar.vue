<template>
  <nav class="app__navbar">
    <h1 class="app__navbar-logo">MNTN</h1>

    <ul class="app__navbar-links">
      <li><nuxt-link to="/equipment">Equipment</nuxt-link></li>
      <li><nuxt-link to="/about">About us</nuxt-link></li>
      <li><nuxt-link to="/blog">Blog</nuxt-link></li>
    </ul>

    <div class="app__navbar-navigation">
      <img src="../assets/images/search.svg" alt="search" />
      <button class="menu">MENU</button>
      <div />
    </div>

    <div class="app__navbar-smallscreen">
      <button @click="toggleSmallScreen" v-show="!showMobileMenu" class="menu">
        MENU
      </button>
      <div
        class="app__navbar-smallscreen_overlay flex-center"
        v-show="showMobileMenu"
      >
        <button
          @click="toggleSmallScreen"
          v-show="showMobileMenu"
          class="overlay__close"
        >
          X
        </button>
        <ul class="app__navbar-smallscreen_links">
          <li><nuxt-link to="/equipment">Equipment</nuxt-link></li>
          <li><nuxt-link to="/about">About us</nuxt-link></li>
          <li><nuxt-link to="/blog">Blog</nuxt-link></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "AppNavbar",
  data() {
    return {
      showMobileMenu: false,
    };
  },
  methods: {
    toggleSmallScreen() {
      this.showMobileMenu = !this.showMobileMenu;
    },
  },
};
</script>

<style>
.app__navbar {
  width: 100%;
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 4rem;
  background: transparent;
  z-index: 5;
}

.app__navbar-logo {
  color: var(--color-white);
  font-family: var(--font-base);
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  letter-spacing: 0.01em;
  text-transform: capitalize;
}

.app__navbar-links {
  display: flex;
  justify-content: center;
  align-items: center;
}

.app__navbar-links li {
  margin: 0 21px;
  cursor: pointer;
}

.app__navbar-links li:hover {
  border-bottom: 1px solid var(--color-white);
  transition: 0.5s ease;
}

.app__navbar-links a {
  font-family: var(--font-base);
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  color: var(--color-white);
}

.app__navbar-navigation {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
}

.app__navbar-navigation img {
  width: 24px;
  height: 24px;
  margin-right: 32px;
  cursor: pointer;
}

.app__navbar-navigation .menu,
.app__navbar-smallscreen .menu {
  background: #0b1d26;
  box-shadow: 0px 0px 40px rgba(11, 29, 38, 0.7);
  border: none;
  border-radius: 48px;
  font-family: var(--font-button);
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 21px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-white);
  padding: 21px 58px;
  cursor: pointer;
}

.app__navbar-navigation .menu:hover,
.app__navbar-smallscreen .menu:hover {
  background: var(--color-gray);
  transition: 0.3s ease;
}

.app__navbar-navigation div {
  border: 2px solid var(--color-white);
  border-radius: 16px;
  width: 30px;
  position: absolute;
  top: 50%;
  right: -6.22%;
}

.app__navbar-smallscreen {
  display: none;
}

.app__navbar-smallscreen_overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: var(--color-black);
  transition: 0.5s ease;
  flex-direction: column;
  z-index: 5;
}

.app__navbar-smallscreen_overlay .overlay__close {
  font-size: 27px;
  color: var(--color-white);
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
}

.app__navbar-smallscreen_links {
  list-style: none;
}

.app__navbar-smallscreen_links li {
  margin: 2rem;
  cursor: pointer;
  color: var(--color-white);
  font-size: 2rem;
  text-align: center;
  font-family: var(--font-base);
}

.app__navbar-smallscreen_links li:hover {
  color: var(--color-white);
}

@media screen and (max-width: 1150px) {
  .app__navbar-links {
    display: none;
  }
}

@media screen and (max-width: 650px) {
  .app__navbar {
    padding: 1rem;
  }

  .app__navbar-smallscreen {
    display: flex;
  }

  .app__navbar-navigation {
    display: none;
  }

  .app__navbar-smallscreen .menu {
    padding: 8px 25px;
  }
}
</style>
