<template>
  <div class="hello">
    <div class=" navbar navbar-default navbar-fixed-top">
      <div class="container">
        <!-- <ul class="nav navbar-nav pull-left" id='nav8'>

        </ul> -->
        <!--<span>-->
          <ul>
             <li><a href="#"><img src="../assets/images/home_image/logo.png"  id='logoimg'></a></li>
             <li><a href="#">我的客户</a></li>
             <li><a href="#">定位监控</a></li>
             <li><a href="#">统计报表</a></li>
             <li><a href="##">我的资料</a></li>
             <li><a href="##">修改密码</a></li>
            <li><a href="##">退出</a></li>


          </ul>

        </ul>
        <!--</span>-->
       </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logoimg{
  padding-left:88px;
}
.navbar-nav li{
  width: 100px;
  height: 100px;
line-height: 100px;
}
.navbar-fixed-top{
  width:100%;
}
.container ul{
  width:100%;
}
.container a{
  margin: 0px;
  width: 1980px;
  color: black;
}
.container a:hover {
  color: green;
}

.container li{
  margin-left: 0px;
  height: 100px;
  line-height:100px;
}

#logoimg{
  padding-left:30px;
}

h1, h2 {
  font-weight: normal;
}

ul {

  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
  text-decoration:none;
}
</style>
