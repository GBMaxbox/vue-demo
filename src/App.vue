<template>
  <!-- <h1>{{ abc }}</h1> -->
  <img class="Imgtcale"
    src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1tWQb9.img?w=768&h=431&m=6&x=433&y=122&s=65&d=65"
    alt="">
  <h3>是真的</h3>
  <router-link to="/student">试试</router-link>
  <router-link to="/">home</router-link>
  <router-view></router-view>

  <div>
    <button class="Logins" @click="Logins">登录</button>
  </div>
  <!-- 登录页面 -->
  <div class="Login" id="Login" v-if="Login">
    <button class="Login-off" @click="Login = !Login">X</button>
  </div>


  <div class="" v-else>
    我是
  </div>



  <div>

    
  </div>



</template>

<script setup>
import Homein from '@/components/Home.vue'
import router from './router'
import { ref } from 'vue';


//函数
const abc = ref('123')
const Login = ref(false)

function Logins() {
  console.log('123');
  Login.value = true;
  console.log(Login.value);
}







</script>



<style scoped>
a {
  text-decoration: none;
  margin: 0 5px;
  color: cornflowerblue;
  font-weight: bolder;
  font-size: 22px;
}

a:hover {
  display: inline;
  text-decoration: underline;
  color: blueviolet;
  transform: scale(2);
}

.Imgtcale {
  width: 100px;

}

.Imgtcale:hover {
  transform: scale(1.2);
  transition: 3s;
}




/* 
登录
*/
.Login {
  width: 500px;
  height: 500px;
  background-color: aqua;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 25px;
}

.Login-off {
  position: absolute;
  top: 0;
  right: 0;
  /* font-size: 35px; */
}
</style>
