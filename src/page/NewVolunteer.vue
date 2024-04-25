<template>
    <div class="container" v-if="admin">
      <h2 class="title">봉사 등록</h2>
      <div class="form-wrap">
        <form>
          <div class="form-group">
            <label for="subject">제목</label><br>
            <input type="text" v-model="post.title" id="subject" placeholder="제목을 입력하세요" />
          </div>
          <div class="form-group">
            <label for="content">내용</label><br>
            <textarea v-model="post.content" id="content" placeholder="내용을 입력하세요" class="content-textarea"></textarea>
          </div>
        </form>
      </div>
      <div class="button-wrap">
        <button @click="fnList" class="btn cancel">목록</button>
        <button @click="fnAddProc" class="btn submit">등록</button>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: "newVolunteer",
    mounted(){
    this.ckadmin()
  },
    data() {
      return {
        admin:false,
        post: {
          title: "",
          content: "",
        },
      };
    },
    methods: {
        
    ckadmin(){
      if(this.$store.getters.getUserInfo[0]&&this.$store.getters.getUserInfo[0].member_no==5000){
        this.admin = true
      }else{
        alert('관리자만 봉사 등록 가능합니다. \n메인페이지로 이동합니다.');
        this.$router.push('/');
      }
    },
      fnList() { // 리스트 화면으로 이동
        this.$router.push('/mypage');
      },
      fnAddProc() { // 등록 프로세스
        if (!this.post.title) { // 제목이 없을 경우
          alert("제목을 입력해 주세요");
          return;
        }
  
        // POST 데이터 설정
        const form = {
          title: this.post.title,
          content: this.post.content,
          member_no: this.$store.getters.getUserInfo[0].member_no,
          name: this.$store.getters.getUserInfo[0].name,
        };
  
        // POST 요청
        const url = 'http://localhost:3000/NewVol';
        axios.post(url, form)
          .then(res => {
            if (res.data.mes == 0) {
              alert('게시물 등록 중 오류가 발생하였습니다.');
            } else {
              alert('정상적으로 등록되었습니다.');
              this.fnList();
            }
          })
          .catch(err => {
            console.error(err);
            alert('게시물 등록 중 오류가 발생하였습니다.');
          });
      },
    },
  };
  </script>
  
  <style scoped>
  .container {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    text-align: left;
  }
  
  .title {
    color: #43b984;
    margin-bottom: 20px;
  }
  
  .form-wrap {
    margin-bottom: 20px;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    font-weight: bold;
  }
  
  input[type="text"],
  textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  textarea.content-textarea {
    min-height: 300px; /* 내용 textarea의 최소 높이 설정 */
  }
  
  button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .button-wrap button.cancel {
    background-color: #ccc;
    margin-right: 10px;
  }
  
  .button-wrap button.submit {
    background-color: #43b984;
    color: #fff;
  }
  </style>
  