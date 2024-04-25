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
      <router-link to="/goods">굿즈</router-link>
      <router-link to="/whackamole">게임</router-link>
      
    </div>

    <div class="header_right_container">
      <div v-if="login">
        <router-link to="/mypage"> 마이페이지 </router-link>
      </div>
      <div v-if="!login">
        <router-link to="/login"> 로그인 </router-link>
      </div>
      <div v-else>
        <span @click="sw()">로그아웃 </span>
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
  data() {
    return {
      login: false,
    };
  },
  watch: {
    onOff() {
      // alert('로그인 또는 로그아웃');
      this.login = this.onOff;
    },
  },
  computed: {
    onOff() {
      return this.$store.getters.getIsLogin;
    },
  },
  methods: {
    sw() {
      
      this.$router.push("/");
      alert("정상적으로 로그아웃 되었습니다.");
      this.$store.commit("onOff");
      this.$store.commit("resetInfo");


      //로그아웃시 카카오 정보를 삭제하기 위한 메소드
      window.Kakao.API.request({
      url: '/v1/user/unlink',
      })
      .then(function(response) {
          console.log(response);
          vueCookies.keys().forEach(cookie => vueCookies.remove(cookie)); //캐시 삭제
      })
      .catch(function(error) {
          console.log(error);
      });
    },
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
  margin-top: -40px;
  
}
.header_right_container,
.header_center_container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header_right_container :deep(a),
.header_center_container a,
.header_right_container span {
  padding: 0 25px;
  color: #111;
  text-decoration: none;
  font-weight: bold;
  font-size: 20px;
}

.header_right_container :deep(a):hover,
.header_center_container a:hover,
.header_right_container span:hover {
  color: #FFCC00; /* 마우스를 갖다 대었을 때의 색상 */
}

.header_left_container {
  display: flex;
  align-items: center;
}
.header_left_container .logo {
  width: 200px;
  cursor: pointer;
  margin-top: 20px;
  margin-left: 50px;
}
</style>
