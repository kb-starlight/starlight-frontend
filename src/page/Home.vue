<template>
  <div>
    <SlideView />
    <div class="mainkeyword-wrap">
      <ul class="mainkeyword-list">
        <li class="mainkeyword-item">
          <a href="#" class="mainkeyword-link">지구의날펀딩</a>
        </li>
        <li class="mainkeyword-item" style="margin-left: 20px">
          <a href="#" class="mainkeyword-link">순직의무군경의날</a>
        </li>
        <li class="mainkeyword-item" style="margin-left: 20px">
          <a href="#" class="mainkeyword-link">가정의달기획전</a>
        </li>
        <li class="mainkeyword-item" style="margin-left: 20px">
          <a href="#" class="mainkeyword-link">이달의해피빈</a>
        </li>
        <li class="mainkeyword-item" style="margin-left: 20px">
          <a href="#" class="mainkeyword-link">기업이랑기부</a>
        </li>
      </ul>
    </div>
    <div class="centered-content">
      <div class="content-layout">
        <div>
          <h3><span>사연게시판 ></span></h3>
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
            <preview-card
              image="https://happybean-phinf.pstatic.net/20240409_239/1712656062181JJiqi_PNG/9.%25A1%25E1%25AC%25E1%25A9%25E1.png?type=a360"
              label="Label3"
              description="Description3"
            />
          </div>
        </div>
        <div>
          <h3><span>봉사모집 ></span></h3>
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
            <preview-card
              image="https://happybean-phinf.pstatic.net/20240409_239/1712656062181JJiqi_PNG/9.%25A1%25E1%25AC%25E1%25A9%25E1.png?type=a360"
              label="Label3"
              description="Description3"
            />
          </div>
        </div>
        <div>
          <h3><span>진행중인 제휴업체 ></span></h3>
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
            <preview-card
              image="https://happybean-phinf.pstatic.net/20240409_239/1712656062181JJiqi_PNG/9.%25A1%25E1%25AC%25E1%25A9%25E1.png?type=a360"
              label="Label3"
              description="Description3"
            />
          </div>
        </div>
      </div>
    </div>
    <footer class="footer">
      <div class="footer-content">
        <nav>
          <a href="https://cocoder.tistory.com" target="_blank">Blog</a> |
          <a href="https://github.com/cocoder16" target="_blank">Github</a>
        </nav>
        <p>
          <span>저자 : cocoder</span><br />
          <span>이메일 : cocoder16@gmail.com</span><br />
          <span>Copyright 2024. cocoder. All Rights Reserved.</span>
        </p>
      </div>
    </footer>
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
.centered-content {
  display: flex;
  justify-content: center;
}
.content-layout {
  padding: 30px;
  overflow: auto;
  margin: auto;
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
.mainkeyword-wrap {
  width: 1140px;
  margin: 55px auto 0;
}
.mainkeyword-list {
  text-align: center;
}
.mainkeyword-item {
  display: inline-block;
  width: 193px;
  vertical-align: top;
}
.mainkeyword-link {
  display: block;
  height: 53px;
  padding-top: 20px;
  border: 1px solid #65DB7F;
  border-radius: 26px;
  font-family: NanumSquareWebFont, dotum, Sans-serif;
  font-size: 17px;
  font-weight: 700;
  color: #00AB33;
  text-align: center;
  text-decoration: none;
  line-height: 30px;
}
.footer {
  position: relative;
  padding: 22px 0 50px;
  border-top: 1px solid #F0F0F0;
  background-color: #fff;
  font-size: 14px;
  color: #828282;
}
.footer-content {
  position: relative;
  padding: 22px 0 50px;
  background-color: #fff;
  font-size: 14px;
  color: #828282;
  left: 50px;
}
</style>