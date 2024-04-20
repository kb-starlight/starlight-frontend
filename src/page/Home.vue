<template>
  <div>
    <SlideView />
    <div class="content-layout">
      <div>
        <h3><span>1. 사연게시판</span></h3>
        <div class="cards-container">
          <preview-card
            image="https://happybean-phinf.pstatic.net/20240409_243/1712656139366lY24E_PNG/4.%25A1%25E1%25BC%25E1%25A9%25E1%25A8%25E1%25A5%25E1.png?type=a360"
            label="Label1"
            description="Description1"
          />
          <preview-card
            image="https://happybean-phinf.pstatic.net/20240409_84/1712656161293toLYm_PNG/5.%25A6%25E1%25AB%25E1%25A6%25E1%25B3%25E1%25A6%25E1%25B5%25E1%25B3%25E1.png?type=a360"
            label="Label2"
            description="Description2"
          />
          <preview-card
            image="https://happybean-phinf.pstatic.net/20240409_242/1712656181657O4qMe_PNG/6.%25A6%25E1%25A5%25E1%25B3%25E1%25A6%25E1%25B5%25E1%25B3%25E1%25A9%25E1%25B5%25E1%25A1%25E1%25B3%25E1.png?type=a360"
            label="Label3"
            description="Description3"
          />
        </div>
      </div>
      <div>
        <h3><span>2. 봉사모집</span></h3>
        <div class="cards-container">
          <preview-card
            image="https://happybean-phinf.pstatic.net/20240409_264/1712655980919qzyYF_PNG/7.%25A9%25E1%25A8%25E1%25B5%25E1.png?type=a360"
            label="Label1"
            description="Description1"
          />
          <preview-card
            image="https://happybean-phinf.pstatic.net/20240409_27/1712656032520SkIPW_PNG/8.%25A6%25E1%25B3%25E1%25A1%25E1.png?type=a360"
            label="Label2"
            description="Description2"
          />
          <preview-card
            image="https://happybean-phinf.pstatic.net/20240409_239/1712656062181JJiqi_PNG/9.%25A1%25E1%25AC%25E1%25A9%25E1.png?type=a360"
            label="Label3"
            description="Description3"
          />
        </div>
      </div>
      <div>
        <h3><span>3. 진행중인 제휴업체</span></h3>
        <div class="cards-container">
          <preview-card
            image="https://happybean-phinf.pstatic.net/20240419_11/1713509555805AgrTN_JPEG/asdfasfasddd.jpg?type=a360"
            label="Label1"
            description="Description1"
          />
          <preview-card
            image="https://happybean-phinf.pstatic.net/20240418_200/1713405587958VJWXc_PNG/%EB%8C%80%ED%91%9C%EC%82%AC%EC%A7%84_(1).png?type=a360"
            label="Label2"
            description="Description2"
          />
          <preview-card
            image="https://happybean-phinf.pstatic.net/20240403_74/1712111719922k5a2c_PNG/%EB%8C%80%ED%91%9C%EC%82%AC%EC%A7%84.png?type=a360"
            label="Label3"
            description="Description3"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PreviewCard from "@/components/PreviewCard.vue";
import SlideView from "../components/SideView.vue";

export default {
  name: "HomePage",
  components: {
    SlideView,
    PreviewCard,
  },
};
</script>

<style scoped>
.content-layout {
  padding: 30px;
}
h3 {
  font-size: 25px;
  font-weight: 900;
  line-height: 1.2;
}
.cards-container {
  display: flex;
  gap: 30px;
}
</style>
