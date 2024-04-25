<template>
  <div>
    <SlideView />
    <Popup v-if="this.$store.getters.getPopup" @setParent="closeStartPopup"/>
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
          <div class="cards-container" style="margin-top: 30px">
          
            <a href="http://localhost:8080/Detailstory/KB%EA%B5%AD%EB%AF%BC%EC%9D%80%ED%96%89%EA%B3%BC%20%ED%95%A8%EA%BB%98%ED%95%98%EB%8A%94%20%EC%96%91%EC%9E%AC%EC%B2%9C%20%EC%93%B0%EB%A0%88%EA%B8%B0%20%EC%A4%8D%EA%B8%B0/%EC%96%91%EC%9E%AC%EC%B2%9C%EC%97%90%EC%84%9C%20%EC%93%B0%EB%A0%88%EA%B8%B0%20%EC%A4%8D%EB%8A%94%20%EB%B4%89%EC%82%AC%ED%99%9C%EB%8F%99%EC%9D%B4%20%EC%98%88%EC%A0%95%EB%90%98%EC%96%B4%20%EC%9E%88%EC%8A%B5%EB%8B%88%EB%8B%A4.%20%EC%B0%B8%EC%97%AC%ED%95%98%EC%8B%A4%20%EB%B6%84%EB%93%A4%EC%9D%80%20%EC%97%B0%EB%9D%BD%EC%A3%BC%EC%84%B8%EC%9A%94.%20(%EB%AC%B8%EC%9D%98%201588-9999)/2024-04-25T03:34:47.000Z/101/5000"><img src="@/assets/봉사게시판이미지1.png"  /> </a> 
              <a href="http://localhost:8080/Detailstory/KB%EA%B5%AD%EB%AF%BC%EC%9D%80%ED%96%89%EA%B3%BC%20%ED%95%A8%EA%BB%98%ED%95%98%EB%8A%94%20%EC%82%AC%EB%9E%91%EC%9D%98%20%EB%B0%98%EC%B0%AC%EB%B4%89%EC%82%AC/KB%20%EC%82%AC%EB%9E%91%EC%9D%98%EC%A7%91%EC%97%90%EC%84%9C%20%EC%A3%BC%EA%B4%80%ED%95%98%EB%8A%94%20%EB%B0%98%EC%B0%AC%EB%B4%89%EC%82%AC%EA%B0%80%20%EC%98%88%EC%A0%95%EB%90%98%EC%96%B4%20%EC%9E%88%EC%8A%B5%EB%8B%88%EB%8B%A4.%20%EC%B0%B8%EC%97%AC%EB%A5%BC%20%EC%9B%90%ED%95%98%EC%8B%9C%EB%A9%B4%20%EC%95%84%EB%9E%98%20%EB%AC%B8%EC%9D%98%EB%B2%88%ED%98%B8%EB%A1%9C%20%EC%97%B0%EB%9D%BD%EC%A3%BC%EC%8B%AD%EC%8B%9C%EC%98%A4.%20(%EB%AC%B8%EC%9D%98%201588-9999)/2024-04-25T03:34:48.000Z/102/5000"><img src="@/assets/봉사게시판이미지2.png"  /> </a> 
              <a href="http://localhost:8080/Detailstory/KB%EA%B5%AD%EB%AF%BC%EC%9D%80%ED%96%89%20with%20KB%EC%BA%A0%ED%8D%BC%EC%8A%A4%20%EC%8A%A4%ED%83%80%20%EB%85%B8%EB%9E%98%EC%99%80%20%ED%95%A8%EA%BB%98%ED%95%98%EB%8A%94%20%EC%9A%94%EC%96%91%EC%9B%90%20%EB%B4%89%EC%82%AC/%EC%9A%94%EC%96%91%EC%9B%90%EC%97%90%EC%84%9C%20%EC%96%B4%EB%A5%B4%EC%8B%A0%EB%93%A4%EC%9D%98%20%EB%86%80%EC%9D%B4%ED%99%9C%EB%8F%99%EC%9D%84%20%EB%8F%84%EC%99%80%EC%A3%BC%EC%8B%A4%20%EB%B6%84%EB%93%A4%EC%9D%84%20%EA%B8%B0%EB%8B%A4%EB%A6%AC%EA%B3%A0%20%EC%9E%88%EC%8A%B5%EB%8B%88%EB%8B%A4.%20%EC%B0%B8%EC%97%AC%EB%A5%BC%20%EC%9B%90%ED%95%98%EC%8B%9C%EB%A9%B4%20%EC%95%84%EB%9E%98%20%EB%AC%B8%EC%9D%98%EB%B2%88%ED%98%B8%EB%A1%9C%20%EC%97%B0%EB%9D%BD%EC%A3%BC%EC%8B%AD%EC%8B%9C%EC%98%A4.%20(%EB%AC%B8%EC%9D%98%201588-9999)/2024-04-25T03:34:50.000Z/103/5000"><img src="@/assets/봉사게시판이미지3.png"  /> </a> 
              <a href="http://localhost:8080/Detailstory/%EC%95%84%EC%9D%B4%EB%93%A4%EC%97%90%EA%B2%8C%20%ED%9E%98%EC%9D%B4%20%EB%90%98%EC%96%B4%EC%A3%BC%EC%84%B8%EC%9A%94.%20KB%EC%96%B4%EB%A6%B0%EC%9D%B4%EC%A7%91/%EC%96%B4%EB%A6%B0%EC%9D%B4%EC%A7%91%20%EB%B4%89%EC%82%AC%ED%99%9C%EB%8F%99%EC%9D%B4%20%EC%98%88%EC%A0%95%EB%90%98%EC%96%B4%20%EC%9E%88%EC%8A%B5%EB%8B%88%EB%8B%A4.%20%EC%B0%B8%EC%97%AC%ED%95%98%EC%8B%A4%20%EB%B6%84%EB%93%A4%EC%9D%80%20%EC%97%B0%EB%9D%BD%EC%A3%BC%EC%84%B8%EC%9A%94.%20(%EB%AC%B8%EC%9D%98%201588-9999)/2024-04-25T03:34:52.000Z/104/5000"><img src="@/assets/봉사게시판이미지4.png"  /> </a> 
              <a href="http://localhost:8080/Detailstory/KB%EA%B5%AD%EB%AF%BC%EC%9D%80%ED%96%89%EC%9D%98%20%EB%B4%89%EC%82%AC%EC%99%80%20%EC%B9%9C%ED%95%B4%EC%A7%80%EA%B8%B0%20%EC%BA%A0%ED%8E%98%EC%9D%B8!/%EA%B5%AD%EB%AF%BC%EC%9D%80%ED%96%89%20%EB%B3%B8%EC%A0%90%20%EC%95%9E%EC%97%90%EC%84%9C%20ESG%20%EA%B8%B0%ED%9A%8D%EB%B6%80%20%EC%A7%81%EC%9B%90%EB%93%A4%EA%B3%BC%20%ED%95%A8%EA%BB%98%20%EB%B4%89%EC%82%AC%20%EC%9D%B8%EC%8B%9D%EA%B0%9C%EC%84%A0%20%EC%BA%A0%ED%8E%98%EC%9D%B8%EC%9D%B4%20%EC%98%88%EC%A0%95%EB%90%98%EC%96%B4%EC%9E%88%EC%8A%B5%EB%8B%88%EB%8B%A4..%20%EC%B0%B8%EC%97%AC%ED%95%98%EC%8B%A4%20%EB%B6%84%EB%93%A4%EC%9D%80%20%EC%97%B0%EB%9D%BD%EC%A3%BC%EC%84%B8%EC%9A%94.%20(%EB%AC%B8%EC%9D%98%201588-9999)/2024-04-25T03:34:53.000Z/105/5000"><img src="@/assets/봉사게시판이미지5.png"  /> </a> 
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
import Popup from "@/page/popup.vue";


export default {
  name: "HomePage",
  data() {
    return {
      homePopupView: true
    }
  },
  components: {
    SlideView,
    PreviewCard,
    Popup,
  },
  methods: {
    closeStartPopup() {
      this.homePopupView = false;
    }
  }
  
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
