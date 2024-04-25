<template>
  <div> 
    <h2>봉사 목록 </h2>
  <table class="table" v-if="list.length!=0" >
  <tr class="tr">
    <td class="td1">게시물 번호</td> <td  class="td2">제목</td>  <td  class="td2">내용</td>
  </tr>
  <tr v-for="li , i in list" :key="li" tr class="tr" >
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
      list: [],
    };
  },
  mounted(){
    this.getList();

  },
  methods:{
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
