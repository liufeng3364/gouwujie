<template>
  <div>
    <NavBar class="profile-nav">
      <template v-slot:center>
        我的
      </template>
    </NavBar>
    <div class="myMes">
      <img src="https://img2.woyaogexing.com/2020/12/01/20e21b1b9dcb450cad1973b057cd9f2e!400x400.jpeg">
      <div>
        <span>昵称昵称</span><br>
        <span>联系方式</span>
      </div>
    </div>
    <div class="otherCon">
      <ul>
        <li v-for="item in otherCon" :key="item">{{item}}</li>
      </ul>
    </div>
    <div class="orders">
      <div>
        <span class="oLeft">我的订单</span>
        <span class="oRight">查看全部订单</span>
      </div>
      <ul>
        <li>
          <img src="@/assets/img/fu.svg">
          <p>待付款</p>
        </li>
        <li>
          <img src="@/assets/img/fa.svg">
          <p>待发货</p>
        </li>
        <li>
          <img src="@/assets/img/shou.svg">
          <p>待收货</p>
        </li>
        <li>
          <img src="@/assets/img/ping.svg">
          <p>评价</p>
        </li>
        <li>
          <img src="@/assets/img/shouhou.svg">
          <p>退款/售后</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/common/navBar/NavBar'
  export default {
    name: "Profile",
    components:{
      NavBar
    },
    data(){
      return{
        otherCon:['收藏夹','关注店铺','足迹','红包卡券']
        
      }
    }
  }
</script>
<style scoped>
    .profile-nav{
      background: var(--color-tint);
      color: #fff;
    }
    .myMes{
      display: flex;
      margin-top: 44px;
      background: url('../../assets/img/right.svg') no-repeat center right;
      width: 100vw;
      height:30vw ;
      padding:3vw;
    }
    .myMes img{
      width: 24vw;
      height: 24vw;
      border-radius: 50%;
    }
    .myMes div{
      width: 25vw;
      padding: 0 2vw;
      line-height: 12vw;
    }
    .otherCon{
      width: 100%;
      margin: 2vh auto;
    }
    ul{
      width: 100%;
      display: flex;
      justify-content: space-around;
    }
    li{
      list-style: none;
    }
    .orders{
      text-align: center;
      width: 90vw;
      margin: 4vh auto;
    }
    .orders ul{
      padding: 2vh 0;
    }
    .oLeft{
      float: left;
    }
    .oRight{
      float: right;
      background: url('../../assets/img/right.svg') no-repeat center right;
      padding-right: 4vw;
      vertical-align: bottom;
    }
</style>
