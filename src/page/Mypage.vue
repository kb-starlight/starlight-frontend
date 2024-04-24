<template>
  <!-- 관리자로 로그인시 보이는 페이지 -->
  <div class="back" v-if="memList[0]&&admin">
  <div class="admin" >
    <h2>관리자 페이지</h2>
  </div>
  </div>
  <!-- 여기부터 일반 회원이 로그인시에 보이는 페이지 -->
  <div v-if="memList[0]&&!admin">
  <div class="my-page" >
    <div id="left" class="left">
      <h2>{{ memList[0].name }}님! 안녕하세요!</h2>
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
</table>
  <br><h3><span>신청한 봉사내역</span></h3>
  <h4 v-if="list2.length==0"> 올린 게시물 없음 </h4>
  <table class="table" v-else>
  <tr class="tr">
    <td class="td1">봉사일련번호</td> <td  class="td2">봉사명</td> <td  class="td2">봉사내용</td>
  </tr>
  <tr v-for="li in list2" :key="li" tr class="tr" @click="open(li.post_no)">
    <td>{{ li.post_no}}</td> <td>{{ li.title }}</td> <td>{{ li.content }}</td>
  </tr>
</table>
</div>
</template>
<script>
import axios from "axios";
export default {
  name: "MyPage",
  mounted(){
    this.getList(1, this.list1);
    this.getList(2, this.list2);
    this.ckadmin()
  },
  data() {
    return {
      login: false,
      admin: false,
      list1:[],
      list2:[],
      post:{},
    };
  },
  computed: {
    memList() {
      return this.$store.getters.getUserInfo;
    },
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
  height: 500px;
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
.tr{
  border-bottom: 1px solid #8A8484;
}
.td1{
  width: 20%;
}
.td2{
  width: 50%;
}
</style>