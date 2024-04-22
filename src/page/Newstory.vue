<template>
  <div class="content-layout">
    <h3>사연 작성</h3>
    <form @submit.prevent="submitPost">
      <div class="form-group">
        <label for="title">제목</label>
        <input type="text" id="title" v-model="post.title" required />
      </div>
      <div class="form-group">
        <label for="content">내용</label>
        <textarea
          id="content"
          rows="5"
          v-model="post.content"
          required
        ></textarea>
      </div>
      <button type="submit">작성 완료</button>
    </form>
  </div>
</template>
<script>
export default {
  name: "NewStory",
  setup() {
    return {
      post: {
        title: "",
        content: "",
      },
    };
  },
  components: {},
  methods: {
    submitPost() {
      // 게시글을 서버에 제출하는 로직을 구현하세요.
      // 여기서는 단순히 콘솔에 출력하는 예시를 제공합니다.
      console.log("게시글 제목:", this.post.title);
      console.log("게시글 내용:", this.post.content);
      // 서버에 데이터를 전송하고 성공한 경우 홈 페이지로 이동하는 등의 로직을 추가하세요.
    },
  },
};
</script>
<style scoped>
.content-layout {
  max-width: 800px;
  margin: 0 auto;
  padding: 50px;
}
.form-group {
  margin-bottom: 20px;
}
label {
  font-weight: bold;
}
input[type="text"],
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
button {
  background-color: #41c982;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
button:hover {
  background-color: #36a37f;
}
</style>
