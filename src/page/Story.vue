<template>
  <div class="header">
    <h3>오늘의 사연랭킹</h3>
  </div>
  <div class="banner" id="banner">
    <div class="cards-container">
      <preview-card
        image="https://happybean-phinf.pstatic.net/20240409_243/1712656139366lY24E_PNG/4.%25A1%25E1%25BC%25E1%25A9%25E1%25A8%25E1%25A5%25E1.png?type=a360"
        label="집이 무너졌어요"
        description="Description1"
      />
      <preview-card
        image="https://happybean-phinf.pstatic.net/20240409_84/1712656161293toLYm_PNG/5.%25A6%25E1%25AB%25E1%25A6%25E1%25B3%25E1%25A6%25E1%25B5%25E1%25B3%25E1.png?type=a360"
        label="rank2"
        description="Description2"
      />
      <preview-card
        image="https://happybean-phinf.pstatic.net/20240409_242/1712656181657O4qMe_PNG/6.%25A6%25E1%25A5%25E1%25B3%25E1%25A6%25E1%25B5%25E1%25B3%25E1%25A9%25E1%25B5%25E1%25A1%25E1%25B3%25E1.png?type=a360"
        label="rank3"
        description="Description3"
      />
      <preview-card
        image="https://happybean-phinf.pstatic.net/20240409_242/1712656181657O4qMe_PNG/6.%25A6%25E1%25A5%25E1%25B3%25E1%25A6%25E1%25B5%25E1%25B3%25E1%25A9%25E1%25B5%25E1%25A1%25E1%25B3%25E1.png?type=a360"
        label="rank4"
        description="Description4"
      />
    </div>
  </div>
  <div class="contents">
    <h3>진행중인 사연</h3>
  </div>
  <div class="write-button">
    <button
      style="
        border: none;
        background-color: #41c982;
        padding: 10px 20px;
        border-radius: 10px;
        color: white;
      "
      @click="write()"
    >
      사연 작성하기
    </button>
  </div>
  <br /><br />
  <div class="content-layout">
  <div v-for="(chunk, index) in chunkedPosts" :key="index" class="cards-container">
    <div v-for="post in chunk" :key="post.post_no" class="card" @click="goToDetail(post)"><br>
      <div class="card-title">{{ post.title }}</div><br>
      <div class="card-title">작성자 : {{ post.name }}</div><br>
      <!-- 여기에 게시물 번호 표시 -->
      <div class="post-number">{{ post.post_no }}</div>
    </div>
  </div>
</div>
</template>
<script>
import PreviewCard from "@/components/PreviewCard.vue";
import axios from "axios";
export default {
  name: "StoryPage",
  computed: {
    chunkedPosts() {
      const chunkSize = 4;
      const chunks = [];
      for (let i = 0; i < this.posts.length; i += chunkSize) {
        chunks.push(this.posts.slice(i, i + chunkSize));
      }
      return chunks;
    },
  },
  mounted() {
    this.fetchPosts();
  },
  data() {
    return {
      posts: [],
      memberNo: 1,
    };
  },
  setup() {
    return {};
  },
  components: {
    PreviewCard,
  },
  methods: {
    goToDetail(post) {
      this.$router.push({ name: 'Detailstory', params: { title: post.title, content: post.content, sendtime: post.sendtime} });
    },
    write() {
      if(this.$store.getters.getUserInfo[0]){
        this.$router.push("/Newstory");
      }else{
        alert('게시글 작성을 위해 로그인을 진행해주세요.')
      }
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

    fetchPosts() {
      let url = "http://localhost:3000/fetchPosts?board_no=" + this.memberNo;
      axios
        .get(url)
        .then((response) => {
          if (response.data.state === "ok") {
            this.posts = response.data.info;
          } else {
            console.log(response.data.message);
          }
        })
    },
  }
};
</script>
<style scoped>
.content-layout {
  overflow: auto;
}
.header {
  text-align: center;
  padding: 20px;
}
.banner {
  margin: 0px;
  padding: 50px;
  background-color: #efefef;
}
.contents {
  text-align: center;
  margin-top: 70px;
}
h3 {
  font-size: 25px;
  font-weight: 900;
  line-height: 1.2;
}
.cards-container {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 30px;
}
.write-button {
  text-align: right;
  margin-right: 180px;
}
/* 버튼 클릭 효과 */
.write-button button:active {
  transform: translateY(2px); /* 클릭되었을 때 버튼을 아래로 이동 */
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1); /* 클릭되었을 때 약간의 그림자 효과 추가 */
}
/* 카드 스타일 설정 */
.card {
  background-color: #ffffff;
  border: 1px solid #dddddd;
  border-radius: 10px;
  padding: 20px;
  width: 300px;
  height: 200px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;

  cursor: pointer;
}
.card-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.card-body {
  font-size: 16px;
  line-height: 1.5;
  color: #333333;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.post-number {
  font-size: 14px;
  color: #888888;
}

.card-title:hover,
.card-body:hover {
  white-space: normal;
  text-overflow: unset;
  overflow: unset;
  z-index: 1;
  position: relative;
}
</style>
