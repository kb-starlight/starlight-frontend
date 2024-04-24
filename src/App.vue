<template>
  <Header />
  <main>
    <router-view />
  </main>
  <Footer />
</template>

<script>
import Header from "./components/Header.vue";
import Footer from '@/page/Footer.vue';

export default {
  name: "App",
  components: {
    Header,
    Footer
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
