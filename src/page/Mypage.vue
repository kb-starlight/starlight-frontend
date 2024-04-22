<template>
  <div>
    마이페이지<br />
    이름 : {{ memList[0].name }} <br />
    전화번호 : {{ memList[0].phone }} <br />
    이메일 : {{ memList[0].email }} <br />
    스타 : {{ memList[0].star }} <br />
    온도 : {{ memList[0].temp }}<br />
    노쇼 횟수 : {{ memList[0].noshowcount }}<br />
  </div>
</template>

<script>
export default {
  name: "CompanyPage",
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
