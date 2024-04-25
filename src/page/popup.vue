<template>
  <div class="background_outter">
    <div class="background_inner">
      <router-link to="/goods"><img class="startPopupImg" src="@/assets/1.png" alt="사진"></router-link>
      <input type="button" class="closeButton" value="닫기" @click="popupClose" />
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
      this.$store.commit("popuponOff");
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
    display: flex;
    justify-content: center;
    align-items: center;
}

.background_inner {
   

/* 팝업창 크기 */
    width: 600px;
    height: 800px;
    
    background-color:rgba(255, 255, 255, 0.8);
    border-radius: 10px;
    padding: 20px;
}

.startPopupImg {
    margin-top: 20px;
    
    width: 90%;
    height: 90%;
}
.closeButton {
  background-color: #ff4081;
  color: #fff;
  font-weight: bold;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 17px;
  margin-top: 15px;
  margin-left: 450px;
}

.closeButton:hover {
  background-color: #d81b60;
}
</style>