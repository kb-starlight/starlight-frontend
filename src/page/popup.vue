<template>
  <div class="background_outter">
    <div class="background_inner">
      <img class="startPopupImg" src="@/assets/1.png" alt="왜 웃는거야"><br/>
      <input type="button" value="닫기" @click="popupClose" />
    </div>
  </div>
</template>
<script>
export default {
  name: "popup",
  setup() {
    return {};
  },
  methods: {
    popupClose() {
      this.$emit("setParent");
    },
  },
  components: {},
};
</script>
<style scoped>
.background_outter {
    position: fixed;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
    background-color: none;
}

.background_inner {
    margin: 10% auto;

/* 팝업창 크기 */
    width: 500px;
    height: 400px;

    background-color: white;
    border-radius: 15px;
}

.startPopupImg {
    margin-top: 10%;
    width: 80%;
    height: 70%;
}
</style>