<template>
  <!-- 관리자로 로그인시 보이는 페이지 -->
  <div class="back" v-if="admin">
  <div class="admin" >
    <h2>관리자 페이지</h2>
    <button @click="bt1"> 회원 관리 </button> <button @click="bt2"> 게시글 관리 </button> <button @click="d"> 봉사 관리 </button> <br>   <br>
    <div class="div1">
      <h4 v-if="adminList.length==0"> 원하는 메뉴를 선택하세요 </h4>
      <table class="table1" v-if="mem" >
        <tr class="tr">
          <td>회원번호</td> <td >회원명</td> <td>회원 아이디</td><td>전화번호</td><td>이메일</td><td>온도</td><td >스타</td><td >노쇼횟수</td><td >차단</td>
        </tr>
        <tr v-for="li in adminList" :key="li" tr class="tr" @click="gogo(li.member_no)">
          <td>{{ li.member_no}}</td> <td>{{ li.name }}</td> <td>{{ li.id }}</td><td>{{ li.phone }}</td><td>{{ li.email }}</td><td>{{ li.temp }}</td><td>{{ li.star }}</td><td>{{ li.noshowcount }}</td><td>{{ li.status }}</td>
        </tr>
      </table>
      <!-- 게시글 관리 true 일 경우 표출 -->
      <table class="table1" v-if="post1" >
        <tr class="tr">
          <td>게시글 번호</td> <td >제목</td> <td>내용</td><td>작성자</td><td>작성시간</td><td>좋아요</td>
        </tr>
        <tr v-for="li in adminList" :key="li" tr class="tr" @click="a">
          <td style="width: 60px">{{ li.post_no}}</td> <td style="width: 200px">{{ li.title }}</td> <td>{{ li.content }}</td><td style="width: 60px">{{ li.name }}</td><td style="width: 150px">{{ li.sendtime }}</td><td style="width: 60px">{{ li.good }}</td>
        </tr>
      </table>
    </div>
  </div>
  </div>
  <!-- 여기부터 일반 회원이 로그인시에 보이는 페이지 -->
  <div v-if="memList[0]&&!admin">
  <div class="my-page" >
    <div id="left" class="left">
      <h2>{{ memList[0].name }}님! 안녕하세요!</h2>
      <img :src="setLevel" />
    </div>
    <div id="right" class="right">
      <div class="section">
        <h3>개인 정보</h3>
        <p><strong>전화번호:</strong> {{ memList[0].phone }}</p>
        <p><strong>이메일:</strong> {{ memList[0].email }}</p>
      </div>
      <div class="section">
        <h3>추가 정보</h3>
        <p><strong>스타:</strong> {{ memList[0].star }}</p>
        <p><strong>온도:</strong> {{ memList[0].temp }}</p>
        <p><strong>노쇼 횟수:</strong> {{ memList[0].noshowcount }}</p>
      </div>
    </div>
  </div>
  <br><h3><span>내가 올린 게시글</span></h3>
  <h4 v-if="list1.length==0"> 올린 게시물 없음 </h4>
  <table class="table" v-else>
  <tr class="tr">
    <td class="td1">게시물 번호</td> <td  class="td2">제목</td>  <td  class="td2">내용</td>
  </tr>
  <tr v-for="li in list1" :key="li" tr class="tr" @click="open(li.post_no)">
    <td>{{ li.post_no}}</td> <td>{{ li.title }}</td> <td>{{ li.content }}</td>
  </tr>
</div>
</template>
<script>
import axios from "axios";
import Lv1 from "../assets/Lv1.png";
import Lv2 from "../assets/Lv2.png";
import Lv3 from "../assets/Lv3.png";
import Lv4 from "../assets/Lv4.png";
import Lv5 from "../assets/Lv5.png";

export default {
  name: "MyPage",
  mounted(){
    this.getList(1, this.list1);
    this.getList(2, this.list2);
    this.ckadmin()
  },
  data() {
    return {
      control:true,
      image: {
        0: Lv1,
        1: Lv1,
        2: Lv2,
        3: Lv3,
        4: Lv4,
        5: Lv5
      },
      login: false,
      admin: false,
      post1:false,
      mem: false,
      list1:[],
      list2:[],
      adminList:[],
      post:{},
    };
  },
  computed: {
    memList() {
      return this.$store.getters.getUserInfo;
    },
    setLevel(){
      const lv = Math.floor(this.memList[0].temp/5);
      if(lv>5){
        return this.image[5];
      }else{
      return this.image[lv];
      }
    }
  },
  methods:{
    open(a){
      let url = "http://localhost:3000/viewPost?post_no=" + a;
      axios.get(url).then((res) => {
        console.log(res.data);
        if (res.data.state == "none") {
          alert("게시물을 오픈할 수 없습니다.");
        } else {
          alert('정보가 들어옴')
          console.log(res.data.info);
          this.post = res.data.info;
          console.log(this.post);
        }
      });
    },
    ckadmin(){
      if(this.$store.getters.getUserInfo[0]&&this.$store.getters.getUserInfo[0].member_no==5000){
        this.admin = true
      }
    },
    getList(board_no, list){
      let url = "http://localhost:3000/my1";
      let obj = {};
      obj.member_no = this.$store.getters.getUserInfo[0].member_no;
      obj.board_no = board_no;

      axios.get(url, {
        params: obj
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.state == "none") {
        } else {
          Array.prototype.push.apply(list, res.data.info);
          console.log(list);
        }
      });
    },
    bt1(){
      this.setMember();
      this.mem=true;
      this.post1=false;
    },
    bt2(){
      this.mem=false;
      this.post1=true;
      this.setPost();
    },
    setMember(){
      let url = "http://localhost:3000/allMem";
      axios.get(url)
      .then((res) => {
        console.log(res.data);
        if (res.data.state == "none") {
        } else {
          this.adminList = res.data.info;
          console.log(this.adminList);
        }
      });
    },
    setPost(){
      let url = "http://localhost:3000/allPost";
      axios.get(url)
      .then((res) => {
        console.log(res.data);
        if (res.data.state == "none") {
        } else {
          this.adminList = res.data.info;
          console.log(this.adminList);
        }
      });
    },
  },
  setup() {
    return {};
  },
};
</script>
<style >
.my-page {
  display: flex;
  justify-content: space-between;
  margin-top: 100px;
}
.left {
  width: 25%;
  background-color: #F7F7F7;
  padding: 20px;
  border-radius: 5px;
  margin-left: 50px;
}
.right {
  width: 60%;
  background-color: #CAE8DE;
  padding: 20px;
  border-radius: 5px;
  margin-right: 50px;
  text-align: left;
  padding-left: 50px;
}
.section {
  margin-bottom: 20px;
}
h3 {
  color: #333;
}
strong {
  font-weight: bold;
}
.admin{
  width: 70%;
  height: 700px;
  background-color: #CAE8DE;
}
.back{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 800px;
}
.table{
  width: 60%;
  background-color: #F7F7F7;
  border-collapse: collapse;
}
.table1{
  width: 100%;
  background-color: #F7F7F7;
  border-collapse: collapse;
  text-align: center;
  margin-top: 10px;
}
.tr{
  border-bottom: 1px solid #8A8484;
}
.td1{
  width: 20%;
}
.td2{
  width: 50%;
}
.div1{
  width: 90%;
  height: 450px;
  margin-top: 20px;
  background-color: #F7F7F7;
  margin: auto;
  overflow: auto;
}
</style>