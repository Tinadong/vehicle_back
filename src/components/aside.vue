<template>
       <div  >
          <li id='nav_top'>
            <img src="../assets/images/home_image/customer_list.png" alt="listimg" id="listimg">
            <span>  客户列表</span>
             <img src="../assets/images/home_image/transfer_add.png" alt="listimg" id='increaseimg'>

            </li>
        <div>
             <ul class="list">
               <li ><router-link to='/one'> 深圳市辰尔技术有限公司 <span>78</span></router-link><span class="glyphicon glyphicon-option-vertical"></span></li>
               <li> <router-link to='/two'>深圳市辰尔技术有限公司<span>78</span></router-link><span class="glyphicon glyphicon-option-vertical"></span></li>
               <li> <router-link to='/three'>深圳市辰尔技术有限公司<span>78</span></router-link><span class="glyphicon glyphicon-option-vertical"></span></li>
               <li> <router-link to='/four'>深圳市辰尔技术有限公司<span>78</span></router-link><span class="glyphicon glyphicon-option-vertical"></span></li>
               <li> <router-link to='/five'>深圳市辰尔技术有限公司<span>78</span></router-link><span class="glyphicon glyphicon-option-vertical"></span></li>
               <li> <router-link to='/six'>深圳市辰尔技术有限公司<span>78</span></router-link><span class="glyphicon glyphicon-option-vertical"></span></li>
               <li><router-link to='/seven'>深圳市辰尔技术有限公司<span>78</span></router-link><span class="glyphicon glyphicon-option-vertical"></span></li>
               <li><router-link to='/eight'>深圳市辰尔技术有限公司<span>78</span></router-link><span class="glyphicon glyphicon-option-vertical"></span></li>
                <li><router-link to='/nine'>深圳市辰尔技术有限公司<span>78</span></router-link><span class="glyphicon glyphicon-option-vertical"></span></li>
                <li><router-link to='/ten'>深圳市辰尔技术有限公司<span>78</span></router-link><span class="glyphicon glyphicon-option-vertical"></span></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
             </ul>


          </div>
  </div>
</template>

<script>

export default {

}
</script>


<style>

#nav_top{
 background: white;
list-style: none;
height: 70px;
background: #2f3a40;
color: white;
line-height: 70px;
}
#nav_top span{
  margin-right:0px;
}
#listimg{
  margin-left:20px;
}
#increaseimg{
margin-right: 20px;
}

ul li{
  list-style: none;
  height: 50px;
  line-height: 50px;
  overflow: hidden;
  padding-right: 0px;

}
a{
   text-decoration:none;
}
ul >li >a{
  color: white;
  text-decoration:none;
}
ul >li >a:hover{
color:green;

}

li span {
  color: white;
  padding: 29px;
}
 .list {
   background: #2f3a40;
   color: white;
 }
list:hover li{
background:green;
 text-decoration:none;
}

</style>
