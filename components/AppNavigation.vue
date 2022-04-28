<template>
  <div class="app__navigation">
    <a v-for="item in arr" :key="item" :href="'#' + item" :title="item">
      <span> {{ item }}</span>
      <span
        class="app__navigation-dot"
        :class="item === active ? 'active' : ''"
      />
    </a>
  </div>
</template>

<script>
export default {
  name: "AppNavigation",
  props: ["active"],
  data() {
    return {
      arr: ["Start", "1", "2", "3"],
    };
  },
};
</script>

<style>
.app__navigation {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;
  height: 100%;
  padding: 2rem;
  align-items: center;
  z-index: 10000;
  right: 0;
}

.app__navigation a {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
}

.app__navigation-dot {
  height: 40px;
  background-color: #cbcbcb;
  margin: 0.2rem 1rem;

  transition: background-color 0.2s ease-in-out;
  border: 1px #fff solid;
}

.app__navigation-dot:hover {
  background-color: var(--secondary-color);
}

.active {
  border: 2px #fff solid;
}

@media screen and (min-width: 2000px) {
  app__navigation-dot {
    width: 20px;
    height: 20px;
  }
}

@media screen and (max-width: 500px) {
  .app__navigation,
  .app__social {
    display: none;
  }
}
</style>
