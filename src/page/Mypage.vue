<template>
  <div class="my-page">
    <div id="left" class="left">
      <h2>{{ memList[0].name }}님! 안녕하세요!</h2>
    </div>
    <div id="right" class="right">
      <div class="section">
        <h3>개인 정보</h3>
        <p><strong>전화번호:</strong> {{ memList[0].phone }}</p>
        <p><strong>이메일:</strong> {{ memList[0].email }}</p>
      </div>
      <div class="section">
        <h3>추가 정보</h3>
        <p><strong>스타:</strong> {{ memList[0].star }}</p>
        <p><strong>온도:</strong> {{ memList[0].temp }}</p>
        <p><strong>노쇼 횟수:</strong> {{ memList[0].noshowcount }}</p>
      </div>
    </div>
  </div>
  <br><h3><span>내가 올린 게시글</span></h3>
  <div></div>
  <br><h3><span>신청한 봉사내역</span></h3>
</template>
<script>
export default {
  name: "MyPage",
  data() {
    return {
      login: false,
    };
  },
  computed: {
    memList() {
      return this.$store.getters.getUserInfo;
    },
  },
  setup() {
    return {};
  },
};
</script>
<style >
.my-page {
  display: flex;
  justify-content: space-between;
  margin-top: 100px;
}
.left {
  width: 25%;
  background-color: #F7F7F7;
  padding: 20px;
  border-radius: 5px;
  margin-left: 50px;
}
.right {
  width: 60%;
  background-color: #CAE8DE;
  padding: 20px;
  border-radius: 5px;
  margin-right: 50px;
  text-align: left;
  padding-left: 50px;
}
.section {
  margin-bottom: 20px;
}
h2,
h3 {
  color: #333;
}
strong {
  font-weight: bold;
}
</style>