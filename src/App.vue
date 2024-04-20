<template>
  <Header />
  <main>
    <router-view />
  </main>
  <footer></footer>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
}

#app {
  min-width: 1440px;
}
</style>
