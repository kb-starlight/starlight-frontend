<template>
  <nav class="header_container">
    <div class="header_left_container">
      <img class="logo" :src="logo" @click="moveHome" />
    </div>

    <div class="header_center_container">
      <router-link to="/vision">비전</router-link>
      <router-link to="/story">사연</router-link>
      <router-link to="/volunteer">봉사모집</router-link>
      <router-link to="/company">제휴업체</router-link>
    </div>

    <div class="header_right_container">
      <div>
        <a>로그인</a>
      </div>
    </div>
  </nav>
</template>

<script>
import { useRouter } from "vue-router";

import logo from "../assets/logo.png";
export default {
  name: "NavHeader",
  setup() {
    const router = useRouter();

    const moveHome = () => {
      router.push("/");
    };

    return {
      logo,
      moveHome,
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
.header_right_container :deep(a),
.header_center_container a {
  padding: 0 25px;
  color: #111;
}

.header_left_container {
  display: flex;
  align-items: center;
}
.header_left_container .logo {
  width: 200px;
  cursor: pointer;
}
</style>
