<template>
  <h1>kakaoLogin</h1>
  <div v-if="kdata" >  {{ kdata.email }}</div>


</template>

<script>
import axios from "axios";
import vueCookies from 'vue-cookies';
 
 const kakaoHeader = {
   "Authorization": "c4d9cdc2f45da10dcec3de970091d52f", //ADMIN KEY
   "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
 };
  
 const getKakaoToken = async code => {
   try {
     const data = {
       grant_type: "authorization_code",
       client_id: "2994159837b47bbbed2a2096f1d0e3be", // REST_API_KEY
       redirect_uri: "http://localhost:8080/ka",
       code: code
     };
     
     const queryString = Object.keys(data)
       .map(k => encodeURIComponent(k) + "=" + encodeURIComponent(data[k]))
       .join("&");
     
     const result = await axios.post(
       "https://kauth.kakao.com/oauth/token",
       queryString,
       { headers: kakaoHeader }
     );
     console.log(result);
  
     console.log("카카오 토큰", queryString);
     return result;
   } catch (e) {
     return e;
   }
 };
 export { getKakaoToken };
  
export default {
name: 'kakao',
setup() {
      return {};
    },
data() {
  return{
      code: null,
      token: null,
      email:'',
  }
},
created() {
    if (this.$route.query.code) { //router을 이동 되더라도 request값을 유지한다.
        this.setKakaoToken();
    }
},
methods: {
  
  async setKakaoToken() {
      console.log("카카오 인증 코드", this.$route.query.code);
      this.code = this.$route.query.code;
      const { data } = await getKakaoToken(this.$route.query.code);
      if (data.error) {
          alert("카카오톡 로그인 오류입니다.");
          this.$router.go();
      return;
      }
      window.Kakao.Auth.setAccessToken(data.access_token);
      console.log('token: ', data.access_token);
      this.token = data.access_token;
      vueCookies.set("access-token", data.access_token, "1d");
      vueCookies.set("refresh-token", data.refresh_token, "1d");



      axios.get('https://kapi.kakao.com/v2/user/me', {
      headers: {
          Authorization: 'Bearer '+this.token
      }
      })
      .then(res => {
      console.log(res);
      this.email = res.data.kakao_account.email;
      console.log(this.email);
        
      let url = "http://localhost:3000/ckem?email=" + this.email;
      axios.get(url).then((res) => {
        console.log(res.data);
        if (res.data.state == "none") {
          alert("가입된 회원정보가 없습니다. 회원가입을 진행하세요.");
          this.$router.push("/join");
        } else {
        let url = "http://localhost:3000/klogin";
        let obj = {};
        obj.email = this.email;
          
        axios
        .get(url, {
        params: obj,
        })
        .then((res) => {
        let data = res.data;
        console.log(data.info);
        console.log("state: " + data.state);
        if (res.data.state == "none") {
          alert("아이디 또는 비밀번호 오류입니다.");
        } else {
          if (data.info.status == "Y") {
            alert("노쇼 3회 누적으로 사이트 이용이 불가합니다.");
          }else{
            let obj1 = new Object();
            obj1.member_no = data.info.member_no;
            obj1.id = data.info.id;
            obj1.pw = data.info.pw;
            obj1.email = data.info.email;
            obj1.idNum = data.info.idNum;
            obj1.phone = data.info.phone;
            obj1.name = data.info.name;
            obj1.star = data.info.star;
            obj1.temp = data.info.temp;
            obj1.noshowcount = data.info.noshowcount;
            obj1.status = data.info.status;
            this.$store.commit("addInfo", obj1);
            this.$store.commit("onOff");

            alert(data.info.name + "님 환영합니다.");
            this.$router.push("/");
          }}
          });
        }
      });

      })



      }
      
}
};
</script>
  
