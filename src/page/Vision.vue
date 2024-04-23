<template>
  <br /><br><br>
  <img src="@/assets/vision.png" /><br /><br />
  <img src="@/assets/mission.png" />
  <footer class="footer">
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
    </footer>
</template>
<script>
export default {
  name: "VisionPage",
  setup() {
    return {};
  },
};
</script>

<style scoped>
.footer {
  position: relative;
  border-top: 1px solid #f0f0f0;
}
.footer-content {
  position: relative;
  padding: 50px 0 30px;
  font-size: 15px;
  color: #666666;
}
</style>