<template>
    <div class="container">
      <h2 class="title">게시글 등록</h2>
      <div class="form-wrap">
        <form>
          <div class="form-group">
            <label for="subject">제목</label><br>
            <input type="text" v-model="post.title" id="subject" placeholder="제목을 입력하세요" />
          </div>
          <div class="form-group">
            <label for="content">내용</label><br>
            <textarea v-model="post.content" id="content" placeholder="내용을 입력하세요. (게시물은 수정,삭제가 불가하오니 글을 읽는 이웃들을 위해 비방/욕설은 자제 부탁드립니다.)" class="content-textarea"></textarea>
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
    name: "NewStory",
    data() {
      return {
        post: {
          title: "",
          content: "",
        },
      };
    },
    methods: {
      fnList() { // 리스트 화면으로 이동
        this.$router.push('/story');
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
        const url = 'http://localhost:3000/Newstory';
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
  