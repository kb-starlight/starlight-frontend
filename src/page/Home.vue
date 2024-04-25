<template>
  <div>
    <SlideView />
    <div class="mainkeyword-wrap">
      <ul class="mainkeyword-list">
        <li class="mainkeyword-item">
          <a class="mainkeyword-link">#지구의날펀딩</a>
        </li>
        <li class="mainkeyword-item" style="margin-left: 20px">
          <a class="mainkeyword-link">#순직의무군경의날</a>
        </li>
        <li class="mainkeyword-item" style="margin-left: 20px">
          <a class="mainkeyword-link">#가정의달기획전</a>
        </li>
        <li class="mainkeyword-item" style="margin-left: 20px">
          <a class="mainkeyword-link">#녹색생활 실천</a>
        </li>
        <li class="mainkeyword-item" style="margin-left: 20px">
          <a class="mainkeyword-link">#기업이랑기부</a>
        </li>
      </ul>
    </div>
    <div class="centered-content">
      <div class="content-layout">
        <div>
          <h3 class="h3_left"><span><router-link to="/story" class="router-link">사연게시판 ></router-link></span></h3>
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
          <h3 class="h3_left"><span><router-link to="/volunteer" class="router-link">봉사모집 ></router-link></span></h3>
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
          <h3 class="h3_left"><span><router-link to="/company" class="router-link">진행중인 제휴업체 ></router-link></span></h3>
         
            <div class="cards-container" style="margin-top: 30px">
              <a href="https://happybean.naver.com/campaign/dreambase"><img src="@/assets/제휴업체1.png"  /> </a> 
              <a href="https://happybean.naver.com/template/campaign/2405withcong"><img src="@/assets/제휴업체2.png"  /> </a> 
              <a href="https://happybean.naver.com/campaign/2024greenweek"><img src="@/assets/제휴업체3.png"  /> </a> 
              <a href="https://happybean.naver.com/campaign/earthday2024"><img src="@/assets/제휴업체4.png"  /> </a> 
              <a href="https://happybean.naver.com/project/2929"><img src="@/assets/제휴업체5.png"  /> </a> 
            </div>
          
          
        </div>
      </div>
    </div>



    <!-- <footer class="footer">
      <div class="footer-content">
        <nav>
          <a href="https://cocoder.tistory.com" target="_blank">Blog</a> |
          <a href="https://github.com/orgs/kb-starlight/dashboard" target="_blank">Github</a>
        </nav>
        <br>
        <p>
          <span>주식회사 스타라이트 |</span>&nbsp;
          <span>대표자 : 권예지, 유세앙, 최성은 |</span>&nbsp;
          <span>서울특별시 영등포구 국제금융로8길 26 </span><br>
          <span>대표전화 : 1588-9999 |</span>&nbsp;
          <span>이메일 : starlight@kbfg.com</span><br>
          <span>사업자등록번호 : 123-85-45678 |</span>&nbsp;
          <span>Copyright starlight. All Rights Reserved.</span>
        </p>
      </div>
    </footer> -->
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

.router-link {
  text-decoration: none;
}

.router-link:hover {
  color:#FFCC00; /* 마우스 호버 시 텍스트 색상 변경 */
}

.h3_left {
  text-align: left;
}

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
  height: 40px;
  border: 3px solid #90e2e2;
  border-radius: 50px;
  font-family: NanumSquareWebFont, dotum, Sans-serif;
  font-size: 17px;
  font-weight: bold;
  color: #050505;
  text-align: center;
  text-decoration: none;
  line-height: 40px;
}
.footer {
  position: relative;
  border-top: 1px solid #F0F0F0;
}
.footer-content {
  position: relative;
  padding: 50px 0 30px;
  font-size: 15px;
  color: #666666;
}
/* label 스타일 수정 */
.preview-card .label {
  font-size: 22px; /* 원하는 크기로 조정 */
  font-weight: bold; /* 굵게 설정 */
}


</style>
