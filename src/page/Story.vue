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
</template>
<script>
import PreviewCard from "@/components/PreviewCard.vue";
export default {
  name: "StoryPage",
  setup() {
    return {};
  },
  components: {
    PreviewCard,
  },
  methods: {
    write() {
      this.$router.push("/Newstory");
    },
  },
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
</style>
