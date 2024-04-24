<template>
  <div class="banner" id="banner"></div>
  <h1 class="ing" style="margin-top: 70px"> 진행중인 제휴 프로그램</h1>
  <div class="cards-container" style="margin-top: 30px">
   <a href="https://happybean.naver.com/campaign/dreambase"><img src="@/assets/제휴업체1.png"  /> </a> 
   <a href="https://happybean.naver.com/template/campaign/2405withcong"><img src="@/assets/제휴업체2.png"  /> </a> 
   <a href="https://happybean.naver.com/campaign/2024greenweek"><img src="@/assets/제휴업체3.png"  /> </a> 
   <a href="https://happybean.naver.com/campaign/earthday2024"><img src="@/assets/제휴업체4.png"  /> </a> <br>
   <a href="https://happybean.naver.com/project/2929"><img src="@/assets/제휴업체5.png"  /> </a> 
   <a href="https://happybean.naver.com/project/2905"><img src="@/assets/제휴업체6.png"  /> </a> 
   <a href="https://happybean.naver.com/project/tmoney"><img src="@/assets/제휴업체7.png"  /> </a> 
   <a href="https://happybean.naver.com/campaign/greener2024"><img src="@/assets/제휴업체8.png"  /> </a> 
    </div>
</template>
<script>
import PreviewCard from "@/components/PreviewCard.vue";
export default {
  name: "CompanyPage",
  setup() {
    return {};
  },
   components: {
    PreviewCard,
  },
};
</script>
