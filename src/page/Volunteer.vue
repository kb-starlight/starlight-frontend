<template>
  <h2>봉사 목록 </h2>
  <div class="centered-table"> 
  <table class="tablevol" v-if="list.length!=0" >
  <tr class="tr">
    <td  style="width: 1px;">게시물 번호</td> <td  style="width: 80px;">제목</td>  <td  class="td2">내용</td>
  </tr>
  <tr v-for="li , i in list" :key="li" tr class="tr"  @click="goToDetail(li)">
    <td>{{ i+1 }}</td> <td>{{ li.title }}</td> <td>{{ li.content }}</td>
  </tr>
</table>
</div>
</template>

<script>
import axios from "axios";
export default {
  name: "VolunteerPage",
  data(){
    return {
      posts: [],
      list: [],
    };
  },
  mounted(){
    this.getList();

  },
  methods:{
    goToDetail(post) {
      this.$router.push({ name: 'Detailstory', params: { title: post.title, content: post.content, sendtime: post.sendtime, post_no: post.post_no, member_no: post.member_no }});
    },
    getList(){
      let url = "http://localhost:3000/volunteer";
   
      axios.get(url)
      .then((res) => {
        console.log(res.data);
        if (res.data.state == "none") {
        } else {
          this.list = res.data.info;
        }
      });
    }
  },
  setup() {
    return {};
  },
};
</script>
<style>
.tablevol{
  width: 60%;
  background-color: #F7F7F7;
  border-collapse: collapse; 
}
.centered-table {
  display: flex;
  justify-content: center;
  align-items: center;

}
</style>