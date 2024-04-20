<template>
  <div class="header_container">
    <div class="header_left_container">
      <img class="logo" :src="logo" />
    </div>

    <div class="header_center_container">
      <a v-for="menuItem in menu" :key="menuItem.id">
        <span>{{ menuItem.label }}</span>
      </a>
    </div>

    <div class="header_right_container">
      <div>
        <a>로그인</a>
      </div>
    </div>
  </div>
</template>

<script>
import logo from "../assets/logo.png";
export default {
  name: "NavHeader",
  setup() {
    const menu = [
      { id: "vision", label: "비전" },
      { id: "story", label: "사연" },
      { id: "volunteer", label: "봉사모집" },
      { id: "company", label: "제휴업체" },
    ];

    return {
      menu,
      logo,
    };
  },
};
</script>

<style scoped>
.header_container {
  display: flex;
  justify-content: space-between;
  align-content: center;

  height: 70px;
  padding: 0 20px;
}
.header_right_container,
.header_center_container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header_right_container a,
.header_center_container a {
  padding: 0 25px;
}

.header_left_container {
  display: flex;
  align-items: center;
}
.header_left_container .logo {
  width: 200px;
}
</style>
