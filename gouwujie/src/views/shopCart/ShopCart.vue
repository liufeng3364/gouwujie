<template>
    <div>
        <Navbar>
            <template v-slot:center>
                购物车
                <span>(0)</span>
            </template>
        </Navbar>
        <CartItem></CartItem>
        <div class="allPrice">
                <input class="oneS" type="radio" name="" id=""> 全选 &nbsp;&nbsp;&nbsp;&nbsp;
                <span>合计:￥0.00</span>
                <input class="btn" type="button" value="去计算(0)">
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/common/navBar/NavBar'
import CartItem from './CartChild/CartItem'
export default {
    name:'shopcart',
    components:{
        Navbar,
        CartItem
    }
}
</script>

<style >
  .nav-bar{
    background: var(--color-tint);
  }
  .allPrice{
      position: fixed;
      z-index: 9;
      bottom: 49px;
      width: 100vw;
      height: 30px;
      line-height: 30px;
      background: #ddd;
      font-size: 14px;
  }
  .oneS{
      margin-left: 15px;
  }
  .btn{
      float: right;
      width: 20vw;
      line-height: 31px;
      border: none;
      background: rgb(255, 83, 0);
      font-size: 14px;
      color: #FFf;
  } 
</style>