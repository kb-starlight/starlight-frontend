<template>
  <title>STARLIGHT : 회원가입</title>
  <img style="margin-top: 80px" src="@/assets/whiteLogo.png" />
  <h1>- 회원가입 -</h1>

  <table class="table3">
    <tr>
      <td class="green11" colspan="2">회원 기본정보</td>
    </tr>
    <tr>
      <td class="green00">아이디</td>
      <td class="table11">
        &nbsp;
        <input type="text" v-model="id" :disabled="id_check" class="textbox5" />
        <button @click="ck_id">중복확인</button>
        <span class="notice1" v-if="checkid"
          >4~12자의 영문 대소문자와 숫자로 입력</span
        >
        <span class="notice" v-if="!checkid"> 사용가능한 아이디입니다.</span>
      </td>
    </tr>
    <tr>
      <td class="green00">비밀번호</td>
      <td class="table11">
        &nbsp; <input type="password" v-model="pw" class="textbox5" />
        <span class="notice1" v-if="checkpw"> 4~12자의 영문 대소문자와 숫자로 입력</span
        >
        <span class="notice" v-if="!checkpw"> 사용가능한 비밀번호입니다.</span>
      </td>
    </tr>
    <tr>
      <td class="green00">비밀번호 확인</td>
      <td class="table11">
        &nbsp; <input type="password" v-model="ckpw" class="textbox5" /><span
          class="notice1"
          v-if="checkpassword"
        >
          비밀번호가 일치하지 않습니다.
        </span>
        <span class="notice" v-if="!checkpassword">
          비밀번호가 일치합니다.</span
        >
      </td>
    </tr>
    <tr>
      <td class="green00">메일 주소</td>
      <td class="table11">
        &nbsp; <input type="text" v-model="email" class="textbox5" /><span
          class="notice"
        >
          예 ) id@domain.com</span
        >
        <span class="notice1" v-if="!ckEmail">
          이메일이 형식에 맞지 않습니다.</span
        >
      </td>
    </tr>

    <tr>
      <td class="green00">이름</td>
      <td class="table11">
        &nbsp; <input type="text" v-model="name" class="textbox5" />
        <span class="notice"> 이름은 한글만 입력 가능합니다.</span>
        <span class="notice1" v-if="!ckName">
          이름이 형식에 맞지 않습니다.</span
        >
      </td>
    </tr>
    <tr>
      <td class="green00">생년월일</td>
      <td class="table11">
        &nbsp; <input type="text" v-model="idNum" class="textbox5" /><span
          class="notice"
        >
          ex) 20241231
        </span>
        <span class="notice1" v-if="ckIdNum"> / 8자리 숫자로 입력하세요</span>
      </td>
    </tr>

    <tr>
      <td class="green00">휴대전화번호</td>
      <td class="table11">
        &nbsp; <input type="text" v-model="phone" class="textbox5" /><span
          class="notice"
        >
          예) 01012345678</span
        >
        <span class="notice1" v-if="!ckPhone"> / 숫자로만 입력하세요.</span>
      </td>
    </tr>
    <tr>
      <td colspan="2"></td>
    </tr>
    <tr>
      <td colspan="2"><button @click="bt_join">회원가입</button></td>
    </tr>
  </table>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  data() {
    return {
      //v-model 선언을 위한 변수들..
      id: "",
      pw: "", //비밀번호
      ckpw: "", //비밀번호 확인
      idNum: "", // 생년월일 8자리 활용하기 위해 선언
      email: "", // 이메일 활용하기 위해 선언
      name: "", //이름 활용하기 위해 선언
      phone: "",

      //화면 동적으로 작동시키기 위한 변수들
      checkpassword: true, // 비밀번호 일치여부 확인
      checkid: true, //ID길이 확인
      checkpw: true, //비밀번호 길이확인메세지
      id_check: false, //Id수정 가능여부(중복체크 실행여부 true여야 실행가능하게 조건 걸 것임.)
      ckIdNum: true, //생년월일 8자리 숫자 맞는지 확인
      ckEmail: false, //이메일 형식에 맞으면 true / 아니면 false
      ckName: false,
      ckPhone: false,
    };
  },

  watch: {
    id() {
      if (this.ck_rule(this.id)) {
        this.checkid = true;
      } else {
        this.checkid = false;
      }
    },

    pw() {
      if (this.ck_rule(this.pw)) {
        this.checkpw = true;
      } else {
        this.checkpw = false;
      }
      this.ck_length();
    },
    ckpw() {
      this.ck_length();
    },
    idNum() {
      const pattern = /^[0-9]+$/;
      if (pattern.test(this.idNum) && this.idNum.length == 8) {
        this.ckIdNum = false;
      } else {
        this.ckIdNum = true;
      }
    },
    email() {
      this.ck_email();
    },
    name() {
      this.ck_name();
    },
    phone() {
      const pattern = /^[0-9]+$/; //숫자만 입력 가능함.
      if (
        pattern.test(this.phone) &&
        (this.phone.length == 11 || this.phone.length == 10)
      ) {
        this.ckPhone = true;
      } else {
        this.ckPhone = false;
      }
    },
  },

  methods: {
    //아이디. 패스워드의 길이 아직 미구현 : 대소문자 숫자 여부 확인하는 메소드
    ck_rule(a) {
      //a = this.pw 형식
      if (a.length > 12 || a.length < 4) {
        return true; //참이면,, 잘못된거니까 정정하라는 메세지 띄우기
      }
      const pattern = /^[a-zA-Z0-9]+$/;
      if (pattern.test(a)) {
        return false;
      } else {
        return true;
      }
    },

    ck_email() {
      const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; //이메일 형태 표현하는 정규표현식
      if (pattern.test(this.email)) {
        //형태가 맞으면 true반환하는 메소드임.
        this.ckEmail = true;
      } else {
        this.ckEmail = false;
      }
    },

    ck_name() {
      const pattern = /^[가-힣]+$/; // 한글만 허용하는 정규 표현식

      // 입력된 이름이 정규 표현식과 일치하는지 확인
      if (pattern.test(this.name)) {
        this.ckName = true;
      } else {
        this.ckName = false;
      }
    },

    //비밀번호 같은지 여부 확인하는 메소드 비밀번호에 값이 없으면 일치한다고 뜨지 않음
    ck_length() {
      if (this.checkpw) {
        this.checkpassword = false;
        return;
      }
      if (this.pw == "") {
        this.checkpassword = true;
        return;
      }
      if (this.pw == this.ckpw) {
        this.checkpassword = false;
      } else {
        this.checkpassword = true;
      }
    },

    ck_id() {
      if (this.id == "") {
        alert("아이디를 입력하세요");
        return;
      }
      if (this.id.length < 4 || this.id.length > 12) {
        alert("아이디를 4자리 이상, 12자리 이하로 입력하세요");
        return;
      }
      if (this.checkid) {
        alert("아이디는 영문 대소문자와 숫자만 입력가능합니다.");
        return;
      }

      let url = "http://localhost:3000/ckid?id=" + this.id;
      axios.get(url).then((res) => {
        console.log(res.data);
        if (res.data.state == "none") {
          this.id_check = true;
          alert("사용가능한 아이디입니다.");
        } else {
          alert(res.data.data);
        }
      });
    },

    bt_join() {
      if (!this.id_check) {
        alert("아이디 중복체크를 진행하세요.");
        return;
      }
      if (this.checkpassword) {
        alert("비밀번호를 올바르게 입력하세요.");
        return;
      }
      if (!this.ckEmail) {
        alert("이메일이 형식에 맞지 않습니다.");
        return;
      }
      if (!this.ckName) {
        alert("이름을 한글로 입력하세요.");
        return;
      }
      if (!this.idNum) {
        alert("생년월일을 8자리 숫자로 입력하세요.");
        return;
      }
      if (!this.ckPhone) {
        alert("핸드폰 번호를 숫자로만 입력하세요.");
        return;
      }
      //유효성 검사 통과시 서버(DB)로 내용 보냄.
      let url = "http://localhost:3000/join";
      let obj = {};
      obj.id = this.id;
      obj.pw = this.pw;
      obj.email = this.email;
      obj.name = this.name;
      obj.idNum = this.idNum;
      obj.phone = this.phone;

      axios.post(url, obj).then((res) => {
        console.log(res.data.mes);
        if (res.data.mes == "err") {
          alert("회원가입 오류 발생");
        } else {
          alert("회원가입 성공");
          this.$router.push("/");
        }
      });
    },
  },

  components: {},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap");

button {
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 4px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s, transform 0.2s; /* 배경색과 크기 변화에 애니메이션 효과 */
}
button:hover {
  background-color: #367b3a; /* 호버 시 버튼 색 변경 */
  transform: scale(1.05); /* 버튼을 약간 크게 만듦 */
}

.table3 {
  width: 1000px;
  margin: auto;
}
.green00 {
  background-color: #fafaa0;
  text-align: center;
  width: 200px;
  color: black;
  font-size: 25px;
}

.green11 {
  text-align: center;
  background-color: #b2fa5c;
  color: black;
  font-size: 30px;
}

#app {
  min-width: 1440px;
  text-align: center;
}

.table11 {
  text-align: left;
  background-color: White;
}

.notice {
  color: #111;
}
.notice1 {
  color: #b9062f;
}
.textbox5 {
  width: 270px;
  height: 30px;
}
</style>
