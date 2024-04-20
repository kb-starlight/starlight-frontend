<template>
  <Header />
  <div>
    <SlideView />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import SlideView from "./components/SideView.vue";

export default {
  name: "App",
  components: {
    Header,
    SlideView,
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
</style>
