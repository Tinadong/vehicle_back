<template>
  <div>
    <div class="box">
      <div class="top_nav">


        <!--<div class="container">-->
        <!--<div class="input-group">-->
        <!--<input type="text" class="form-control input-lg" id="search"><span class="input-group-addon btn btn-primary">搜索</span>-->
        <!--</div>-->
        <!--</div>-->





        <div class="top_left">
          <img src="../../assets/images/home_image/customer.png" alt="">
          辰尔科技有限公司</div>
        <div class="top_right">
          <ul class="list_nav">
            <span>登录账号</span>
            <span>设备总量</span>
            <span>设备销量</span>
            <span>联系人</span>
            <span>电话</span>
            <span>地址</span>
          </ul>
          <ul class="list_nav_data">
            <span>chener</span>
            <span>100</span>
            <span>50</span>
            <span>Alice</span>
            <span>6666666</span>
            <span>深圳市南山区科苑路科兴科学园</span>
          </ul>
        </div>
      </div>
      <div class="main">
        <div class="main_nav">
          <button  class="button">批量转移</button>
          <button class="button" >批量搜索</button>
          <button class="button" >添加设备</button>
          <button  class="button">导出EXCEL</button>


        </div>
        <table   >
          <tbody >

          <tr id="menu_nav">
            <th class="choice">O</th>
            <th class="order">序号</th>
            <th class="name">设备名</th>
            <th class="myId">设备号（ID)</th>
            <th class="cell">设备手机卡号</th>
            <th class="model">型号</th>
            <th class="time">修改时间</th>
            <th class="transfer">设备转移</th>
            <th class="operation">操作</th>
          </tr>
          <tr>
            <td class="choice"><input type="radio" /></td>
            <td  class="order">1</td>
            <td class="name">AK-1188</td>
            <td  class="myId">66666</td>
            <td class="cell">88888888</td>
            <td class="model">AK</td>
            <td class="time">2017-10-19</td>
            <td class="transfer">转移</td>
            <td  class="operation" >编辑|删除</td>
          </tr>
          <tr>
            <td class="choice"><input type="radio" /></td>
            <td  class="order">2</td>
            <td class="name">AK-1188</td>
            <td  class="myId">66666</td>
            <td class="cell">88888888</td>
            <td class="model">AK</td>
            <td class="time">2017-10-19</td>
            <td class="transfer">转移</td>
            <td  class="operation" >编辑|删除</td>
          </tr>
          <tr>
            <td class="choice"><input type="radio" /></td>
            <td  class="order">3</td>
            <td class="name">AK-1188</td>
            <td  class="myId">66666</td>
            <td class="cell">88888888</td>
            <td class="model">AK</td>
            <td class="time">2017-10-19</td>
            <td class="transfer">转移</td>
            <td  class="operation" >编辑|删除</td>
          </tr><tr>
            <td class="choice"><input type="radio" /></td>
            <td  class="order">4</td>
            <td class="name">AK-1188</td>
            <td  class="myId">66666</td>
            <td class="cell">88888888</td>
            <td class="model">AK</td>
            <td class="time">2017-10-19</td>
            <td class="transfer">转移</td>
            <td  class="operation" >编辑|删除</td>
          </tr>
          <tr>
            <td class="choice"><input type="radio" /></td>
            <td  class="order">5</td>
            <td class="name">AK-1188</td>
            <td  class="myId">66666</td>
            <td class="cell">88888888</td>
            <td class="model">AK</td>
            <td class="time">2017-10-19</td>
            <td class="transfer">转移</td>
            <td  class="operation" >编辑|删除</td>
          </tr>
          <tr>
            <td class="choice"><input type="radio" /></td>
            <td  class="order">6</td>
            <td class="name">AK-1188</td>
            <td  class="myId">66666</td>
            <td class="cell">88888888</td>
            <td class="model">AK</td>
            <td class="time">2017-10-19</td>
            <td class="transfer">转移</td>
            <td  class="operation" >编辑|删除</td>
          </tr>
          <tr>
            <td class="choice"><input type="radio" /></td>
            <td  class="order">7</td>
            <td class="name">AK-1188</td>
            <td  class="myId">66666</td>
            <td class="cell">88888888</td>
            <td class="model">AK</td>
            <td class="time">2017-10-19</td>
            <td class="transfer">转移</td>
            <td  class="operation" >编辑|删除</td>
          </tr>
          <tr>
            <td class="choice"><input type="radio" /></td>
            <td  class="order">8</td>
            <td class="name">AK-1188</td>
            <td  class="myId">66666</td>
            <td class="cell">88888888</td>
            <td class="model">AK</td>
            <td class="time">2017-10-19</td>
            <td class="transfer">转移</td>
            <td  class="operation" >编辑|删除</td>
          </tr>
          <tr>
            <td class="choice"><input type="radio" /></td>
            <td  class="order">9</td>
            <td class="name">AK-1188</td>
            <td  class="myId">66666</td>
            <td class="cell">88888888</td>
            <td class="model">AK</td>
            <td class="time">2017-10-19</td>
            <td class="transfer">转移</td>
            <td  class="operation" >编辑|删除</td>
          </tr>
          <tr>
            <td class="choice"><input type="radio" /></td>
            <td  class="order">10</td>
            <td class="name">AK-1188</td>
            <td  class="myId">66666</td>
            <td class="cell">88888888</td>
            <td class="model">AK</td>
            <td class="time">2017-10-19</td>
            <td class="transfer">转移</td>
            <td  class="operation" >编辑|删除</td>
          </tr>
          <tr>
            <td class="choice"><input type="radio" /></td>
            <td  class="order">11</td>
            <td class="name">AK-1188</td>
            <td  class="myId">66666</td>
            <td class="cell">88888888</td>
            <td class="model">AK</td>
            <td class="time">2017-10-19</td>
            <td class="transfer">转移</td>
            <td  class="operation" >编辑|删除</td>
          </tr><tr>
            <td class="choice"><input type="radio" /></td>
            <td  class="order">12</td>
            <td class="name">AK-1188</td>
            <td  class="myId">66666</td>
            <td class="cell">88888888</td>
            <td class="model">AK</td>
            <td class="time">2017-10-19</td>
            <td class="transfer">转移</td>
            <td  class="operation" >编辑|删除</td>
          </tr>
          <tr>
            <td class="choice"><input type="radio" /></td>
            <td  class="order">13</td>
            <td class="name">AK-1188</td>
            <td  class="myId">66666</td>
            <td class="cell">88888888</td>
            <td class="model">AK</td>
            <td class="time">2017-10-19</td>
            <td class="transfer">转移</td>
            <td  class="operation" >编辑|删除</td>
          </tr>
          <tr>
            <td class="choice"><input type="radio" /></td>
            <td  class="order">14</td>
            <td class="name">AK-1188</td>
            <td  class="myId">66666</td>
            <td class="cell">88888888</td>
            <td class="model">AK</td>
            <td class="time">2017-10-19</td>
            <td class="transfer">转移</td>
            <td  class="operation" >编辑|删除</td>
          </tr>
          <tr>
            <td class="choice"><input type="radio" /></td>
            <td  class="order">15</td>
            <td class="name">AK-1188</td>
            <td  class="myId">66666</td>
            <td class="cell">88888888</td>
            <td class="model">AK</td>
            <td class="time">2017-10-19</td>
            <td class="transfer">转移</td>
            <td  class="operation" >编辑|删除</td>
          </tr>

          </tbody>
        </table>


      </div>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>


<style>
  #search{
    margin: 20px;
  }


  button{ outline:none; }
  table .choice{
    padding-left:30px;
  }
  table td{
    height:40px;
  }


  table{
    margin: 0px;
    padding:0px;
    border:0px;
    width:1600px;
  }
  .choice{

    padding-left: 30px;
    width:60px;
  }
  .order{
    width:50px;
  }
  .name{
    width:80px;
  }
  .myId{
    width:80px;
  }
  .cell{
    width:80px;
  }
  .model{
    width:50px;
  }
  .time{
    width:80px;
  }
  .transfer{
    width:60px;
  }
  .operation{
    width:53px;
  }


  #menu_nav{
    padding-left:50px;
    height:40px;
    background: rgb(23,210,156);
    color: rgb(255,255,255);
  }


  .box{
    clear: both;
    background:white;
    margin-top:0px;
    height: 900px;
  }
  .top_nav{
    margin-top: 25px;
    position:relative;

    float: left;
    width: 1980px;
    height:180px;
    background: rgb(233,246,242);
    overflow: hidden;

  }
  .top_left{
    position: absolute;
    margin-right: 3px;
    height: 90px;
    width: 216px;
    background: rgb(255,255,255);
    margin-top: 80px;
    line-height: 90px;

  }
  .top_right{
    height: 90px;
    width: 1600px;
    line-height: 90px;
    position: absolute;
    margin-left: 230px;
    background: rgb(255,255,255);
    margin-top: 80px;
    text-align:left;
  }
  .main{
    margin-top: 220px;
    background: white;
    text-align: left;
    clear: both;
  }
  .main_nav{
    height:80px;
    line-height:80px;
  }
  button{
    color:green;
    border:1px;
    height:40px;
    width: 100px;
    background: white;
    border:1px solid green;
    line-height: 40px;
    border-radius: 30px;
    margin-left:30px;

  }
  .list_nav{
    margin: 0px;
    padding:0px;
    height:30px;
  }
  .list_nav span{
    margin-left:53px;
  }
  .list_nav_data span{
    padding-left:53px;
  }

  table .choice{
    padding-left:30px;
  }
</style>
