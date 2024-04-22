<template>
    <title>STARLIGHT : 로그인</title>
 
    <div style="margin-top: 60px"></div>
    <img src="@/assets/whiteLogo.png"/> <br><br>

    <table class="table" >
        <tr>
            <td class="green1" colspan="2"> 로그인</td>
        </tr>
        <tr>
            <td class="green">아이디</td>
            <td class="table1"> &nbsp; <input type="text" v-model="id" :disabled="id_check" class="textbox"> </td>
        </tr>
        <tr>
            <td class="green"> 비밀번호 </td>
            <td class="table1"> &nbsp; <input type="password" v-model="pw" class="textbox"> </td>
        </tr>
        <tr>
            <td colspan="2">  </td>
        </tr>
        <tr>
            <td colspan="2">  &nbsp;  &nbsp; &nbsp; <button @click="bt_login"> 로그인 </button> &nbsp; <router-link to="/join"><button> 회원가입 </button></router-link></td>
        </tr>
        </table>


</template>

<script>
import axios from 'axios';
export default {
    name: 'App',
    data() {
        return {
            //v-model 선언을 위한 변수들..
            id: '', //ID
            pw: '',  //비밀번호
        }
    },


    watch: {
    },

    methods:{
        bt_login(){ 
            if(this.id.length<4||this.id.length>12){
                alert('아이디를 4자리 이상, 12자리 이하로 입력하세요');
                return;
            }
            if(this.pw.length<4||this.pw.length>12){
                alert('비밀반호를 4자리 이상, 12자리 이하로 입력하세요');
                return;
            }
            
            let url = "http://localhost:3000/login";
            let obj = {};
            obj.id = this.id;
            obj.pw = this.pw;

            axios.get(url, {
                params: obj
            })
            .then(res=>{
                let data = res.data;
                console.log(data.info);
                console.log('state: '+data.state);
                if(res.data.state=='none'){
                    alert('아이디 또는 비밀번호 오류입니다.');
                }else{
                    if(data.info.status=='Y'){
                        alert('노쇼 3회 누적으로 사이트 이용이 불가합니다.'); 
                    }
                    let obj1 = new Object;
                    obj1.member_no = data.info.member_no;
                    obj1.id = data.info.id;
                    obj1.pw = data.info.pw;
                    obj1.email = data.info.email;
                    obj1.idNum = data.info.idNum;
                    obj1.phone = data.info.phone;
                    obj1.name = data.info.name;
                    obj1.star = data.info.star;
                    obj1.temp = data.info.temp;
                    obj1.noshowcount = data.info.noshowcount;
                    obj1.status = data.info.status;
                    this.$store.commit('addInfo', obj1);
                    this.$store.commit('onOff');
                    
                    alert(data.info.name+'님 환영합니다.');
                    this.$router.push('/')

                }
            })
        },
    },

    components: {
    }
}

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap');

button {
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 4px 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 10px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s, transform 0.2s; /* 배경색과 크기 변화에 애니메이션 효과 */
  }
  button:hover {
    background-color: #367B3A; /* 호버 시 버튼 색 변경 */
    transform: scale(1.05); /* 버튼을 약간 크게 만듦 */
  }

.table{
    width: 60px;
    margin : auto;

}
.green {
    text-align: center;
    width :150px;
    height: 30px;
    color: #111;
}

.green1 {
    text-align: center;
    background-color: #B2FA5C;
    color: #111;
    font-size: larger;

}
#app {
  min-width: 1440px;
    text-align: center;
}
.table1 {
    text-align: center;
    background-color: White;
}

.textbox{
    line-height: 1.2;
    width: 250px;
    height: 30px;
    padding: 5px;
    font-size: 16px;
}
</style> 