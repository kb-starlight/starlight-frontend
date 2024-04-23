<template>
  <div>
    <h2>게시글 등록</h2>
        <div class="AddWrap">
            <form>
                <table class="tbAdd">
                    <colgroup>
                        <col width="15%" />
                        <col width="*" />
                    </colgroup>
                    <tr>
                        <th>제목</th>
                        <td><input type="text" v-model="subject" ref="subject" /></td>
                    </tr>
                    <tr>
                        <th>내용</th>
                        <td><textarea v-model="cont" ref="cont"></textarea></td>
                    </tr>
                </table>
            </form>
        </div>
        <div class="btnWrap">
            <a href="javascript:;" @click="fnList" class="btn">목록</a>
            <a href="javascript:;" @click="fnAddProc" class="btnAdd btn">등록</a>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
  name: "NewStory",
  data(){
  },
  setup() {
    return {
     
      post: {
        title: "",
        content: "",
      },
    };
  },
  components: {},
  methods: {
    fnList(){ //리스트 화면으로 이동
        this.$router.push('/story');
    }
        ,fnAddProc() { //등록 프로세스
            if(!this.subject) { //제목이 없다면 값을 입력하라고 알려준다.
                alert("제목을 입력해 주세요");
                this.$refs.subject.focus(); //방식으로 선택자를 찾는다.
                return;
            }

            //backend로 전송될 POST 데이터
            let form = {} 
            form.title = this.subject;
            form.content = this.cont;
            form.member_no =this.$store.getters.getUserInfo[0].member_no;
            form.name = this.$store.getters.getUserInfo[0].name;
            
                 
            let url = 'http://localhost:3000/Newstory';
            axios.post(url,form)
            .then(res=>{
              console.log(res);
              console.log(res.data.mes);
                if(res.data.mes == 0) {
                    alert('게시물 등록중 오류가 발생하였습니다.');
                } else {
                    alert('정상적으로 등록되었습니다.');
                    this.fnList();
                }
            })
            .catch((err)=>{
                console.log(err);
            })
        }
    }
};
</script>
<style scoped>
    .tbAdd{border-top:1px solid #888;}
    .tbAdd th, .tbAdd td{border-bottom:1px solid #eee; padding:5px 0;}
    .tbAdd td{padding:10px 10px; box-sizing:border-box;}
    .tbAdd td input{width:100%; min-height:30px; box-sizing:border-box; padding:0 10px;}
    .tbAdd td textarea{width:100%; min-height:300px; padding:10px; box-sizing:border-box;}
    .btnWrap{text-align:center; margin:20px 0 0 0;}
    .btnWrap a{margin:0 10px;}
    .btnAdd {background:#43b984}
    .btnDelete{background:#f00;}
html,body{padding:0; margin:0;}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2C3E50;
}
h1{color:#43b984;}
table{width:100%; border-collapse:collapse;}
.wrap{width:100%;}
.container{width:800px; margin:0 auto;}
a{text-decoration:none;}
.btn{padding:10px; background:#34445c; color:#fff;}
</style>