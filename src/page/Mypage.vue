<template>
  <!-- 모달 창 -->
  <div class="modal-overlay" v-if="showModalFlag">
  <div class="modal" >
      <div class="modal-content">
        <span class="close" @click="closeModal"> &times;</span>
        <h3>{{ mem_name }} 회원관리</h3>
        <table class="modalTable">
          <tr>
            <td style="width: 30%;" >회원번호</td><td>{{ mem_no }}</td>
          </tr>
          <tr>
            <td>이름</td><td>{{ mem_name }}</td>
          </tr>
          <tr>
            <td>아이디</td><td>{{ memId }}</td>
          </tr>
          <tr>
            <td>온도</td><td>{{ memTemp }}</td>
          </tr>
          <tr>
            <td>스타</td><td>{{ memStar }}</td>
          </tr>
          <tr>
            <td>노쇼횟수</td><td>{{ memNoShow }}</td>
          </tr>
          <tr>
            <td>차단여부</td><td>{{ memStatus }}</td>
          </tr>
        </table> 
        <br>
         <div> <button @click="update(4, 'Y', mem_no)"> 회원 차단 </button>  <button @click="update(4, '', mem_no)"> 회원 차단 해제 </button>  
          <button  @click="update(3,memNoShow+1 , mem_no)" >노쇼 횟수 추가</button><br> 
          <button @click="update(1,memStar+1 , mem_no)"> 스타 올려주기 </button>  <button @click="update(1,memStar-1 , mem_no)"> 스타 내리기 </button> 
          <button @click="update(2,memTemp+1 , mem_no)"> 온도 올려주기 </button>  <button @click="update(2,memTemp-1 , mem_no)"> 온도 내리기 </button> </div> 
      </div>
    </div>
  </div>

  <!-- 관리자로 로그인시 보이는 페이지 -->
  <div class="back" v-if="admin">
  <div class="admin" >
    <h2>관리자 페이지</h2>
    <button @click="bt1"> 회원 관리 </button> <button @click="bt2"> 게시글 관리 </button> <button @click="bt3"> 봉사 관리 </button> <br>   <br>
    <div class="div1">
      <h4 v-if="adminList.length==0"> 원하는 메뉴를 선택하세요 </h4>
      <table class="table111" v-if="mem" >
        <tr class="tr">
          <td>회원번호</td> <td >회원명</td> <td>회원 아이디</td><td>전화번호</td><td>이메일</td><td>온도</td><td >스타</td><td >노쇼횟수</td><td >차단</td>
        </tr>
        <tr v-for="li in adminList" :key="li" tr class="tr" @click="showModal(li)">
          <td>{{ li.member_no}}</td> <td>{{ li.name }}</td> <td>{{ li.id }}</td><td>{{ li.phone }}</td><td>{{ li.email }}</td><td>{{ li.temp }}</td><td>{{ li.star }}</td><td>{{ li.noshowcount }}</td><td>{{ li.status }}</td>
        </tr>
      </table>
      <!-- 게시글 관리 true 일 경우 표출 -->
      <table class="table111" v-if="post1" >
        <tr class="tr">
          <td>게시글 번호</td> <td >제목</td> <td>내용</td><td>작성자</td><td>작성시간</td><td>좋아요</td>
        </tr>
        <tr v-for="li in adminList" :key="li" tr class="tr" @click="goToDetail(li)">
          <td style="width: 60px">{{ li.post_no}}</td> <td style="width: 200px">{{ li.title }}</td> <td>{{ li.content }}</td><td style="width: 60px">{{ li.name }}</td><td style="width: 150px">{{ formatTime(li.sendtime) }}</td><td style="width: 60px">{{ li.good }}</td>
        </tr>
      </table>
      <!-- 봉사관리 true 일 경우 표출 -->
      <table class="table111" v-if="val" >
        <tr class="tr">
          <td>봉사 번호</td> <td >봉사명</td> <td>내용</td>
        </tr>
        <tr v-for="li, i in adminList" :key="li" tr class="tr" @click="goToDetail(li)">
          <td style="width: 80px">{{i+1}}</td> <td style="width: 300px">{{ li.title }}</td> <td>{{ li.content }}</td>
        </tr>
      </table>
    </div>
    <br>
    <button @click="addvol" v-if="val"> 봉사 등록 </button> <br>
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
  <div class="centered-table">
  <h4 v-if="list1.length==0"> 올린 게시물 없음 </h4>
  <table class="table20" v-else>
  <tr class="tr">
    <td class="td1" style="width: 13%;">게시물 번호</td> <td  class="td2" style="width: 30%;">제목</td>  <td  class="td2">내용</td>
  </tr>
  <tr v-for="li in list1" :key="li" tr class="tr"   @click="goToDetail(li)">
    <td>{{ li.post_no}}</td> <td>{{ li.title }}</td> <td>{{ li.content }}</td>
  </tr>
</table>
</div>
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
      mem_no:'',
      mem_name:'',
      memId:'',
      memStar:'',
      memTemp:'',
      memNoShow:'',
      memStatus:'',
      control:true,
      showModalFlag: false,
      image: {
        0: Lv1,
        1: Lv2,
        2: Lv3,
        3: Lv4,
        4: Lv5,
        5: Lv5
      },
      login: false,
      admin: false,
      post1:false,
      mem: false,
      val:false,
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
      if(lv>4){
        return this.image[5];
      }else{
      return this.image[lv];
      }
    }
  },
  methods:{
    showModal(a) {
      this.mem_no=a.member_no;
      this.mem_name=a.name;
      this.memId=a.id;
      this.memStar=a.star;
      this.memTemp=a.temp;
      this.memNoShow=a.noshowcount;
      this.memStatus=a.status;
      this.showModalFlag = true;
    },

    //a => 수정할 컬럼
    //b => 수정할 데이터
    //c => 수정할 회원의 회원번호
    update(a, b, c){
      let url = "http://localhost:3000/admin";
      if(c==5000){
        alert('관리자의 회원정보는 수정할 수 없습니다.');
        this.showModalFlag = false;
        return;
      }
      const obj = {
        column:a,
        after:b,
        member_no:c
      };
      axios.post(url,obj)
      .then(res=>{
        console.log(res);
        console.log(res.data.mes);
        if(res.data.mes==1){
          alert('정상적으로 처리되었습니다.')
          this.bt1();
          this.showModalFlag = false;
          this.$router.push('/mypage');
        }else{
          alert('처리 중 오류가 발생하였습니다.')
        }
      })
    },




    closeModal() {
      this.showModalFlag = false;
   
    },
    goToDetail(post) {
      this.$router.push({ name: 'Detailstory', params: { title: post.title, content: post.content, sendtime: post.sendtime, post_no: post.post_no, member_no : post.member_no }});
    },
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
      this.val=false;
    },
    bt2(){
      this.mem=false;
      this.post1=true;
      this.val=false;
      this.setPost();
    },
    bt3(){
      this.mem=false;
      this.post1=false;
      this.val = true,
      this.setVolunteer();
    },
    addvol(){
      this.$router.push('/newVolunteer');
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
    setVolunteer(){
      let url = "http://localhost:3000/volunteer";
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
   
    formatTime(timeString) {
      const date = new Date(timeString);
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const day = date.getDate().toString().padStart(2, '0');
      const hours = date.getHours().toString().padStart(2, '0');
      const minutes = date.getMinutes().toString().padStart(2, '0');
      const seconds = date.getSeconds().toString().padStart(2, '0');
      return `${year}년 ${month}월 ${day}일 ${hours}:${minutes}:${seconds}`;
    }
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
.table20{
  width: 60%;
  background-color: #F7F7F7;
  border-collapse: collapse;
  
}
.table111{
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
.modal-overlay {
  position: fixed;
  z-index: 1000; /* 다른 요소보다 위에 표시할 값 */
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4); /* 반투명한 배경 */
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background-color: #fefefe;
  padding: 20px;
  border-radius: 5px;
  width: 90%;
  height: 50%;
  max-width: 800px;
  align-items: center;
  position: relative; /* 상대적 위치 설정 */
}

.close {
  color: #aaa;
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
}
.modalTable {
  width: 100%;
  text-align: left;
  border-collapse: collapse; /* 테이블 셀 경계를 합침 */
  margin-top: 20px;
}

.modalTable th, .modalTable td {
  border: 1px solid #ccc; /* 테이블 셀 테두리 스타일 지정 */
  padding: 8px; /* 셀 내부 여백 설정 */
  text-align: left; /* 텍스트 왼쪽 정렬 */
}
.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>