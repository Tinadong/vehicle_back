<template>
  <div id="app">
    <!-- <img src="./assets/images/logo.png"> -->
    <headpage class="header"></headpage>
    <div class="d1">
      <asidex class="aside"></asidex> 
      <router-view class="router"></router-view>
    </div>
  </div>
</template>

<script>

import headpage from '@/components/HelloWorld'
import asidex from '@/components/aside'

export default {
  name: 'app',
  components:{
    headpage,
     asidex
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.d1{
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  position:fixed;
  top:55px;
  bottom: 0;
  margin: 0px;
  padding: 0px;
}
.aside{
  flex: 0 0 379px;
  width: 100%;
  background:rgba(145, 155, 211, 0.5);
  height: 100%;
  color:green;
}
.router{
  flex: 1;
  
}

</style>
