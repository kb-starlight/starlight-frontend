<template>
  <div class="banner" id="banner"></div>
  <h3 class="ing">진행중인 제휴 프로그램 건</h3>
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

<style scoped>
.banner {
  margin: 0px;
  margin-top: 60px;
  padding: 150px;
  background-color: #efefef;
}

.ing{
  border: 0.5px solid rgb(201, 197, 197);
  border-radius: 5px;
  padding: 10px;
  width: 600px;
  margin: 0 auto; /* 가운데 정렬을 위해 추가 */
  margin-top: 30px;
  margin-bottom: 30px;
  
}
.cards-container {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 30px;
}
</style>
