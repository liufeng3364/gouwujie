<template>
    <div id="GoodCon">
        <div id="0" class="goodContent">
            <Swiper>
                <template v-slot:SwiperContent>
                    <div class="swiper-slide" v-for="item in goodParam.topImages" :key="item">
                        <img :src="item" alt="">
                    </div>
                </template>
            </Swiper><br>
            <div class="detailBottomBar">
            <span>
                <img src="@/assets/img/service.svg" alt=""><br>
                客服
            </span>
            <span>
                <img src="@/assets/img/store.svg" alt=""><br>
                店铺
            </span>
            <span>
                <img src="@/assets/img/collection.svg" alt=""><br>
                收藏
            </span>
            <span class="shop" @click="shopClick(shopParamMes)">
                加入购物车
            </span>
            <span class="buy">
                购买
            </span>
            </div>
            <p class="title">{{goodParam.title}}</p><br>
            <p class="price">￥{{goodParam.lowNowPrice}}</p><br>
            <div class="goodColumns">
                <span v-for="item in goodColumns" :key="item">{{item}}</span>
            </div><br>
            <div class="instructions">
                <span v-for="item in instructions" :key="item">
                    <img :src="item.icon" alt="">
                    {{item.name}}
                </span>
            </div><br>
            <div class="promotions">
                <span v-for="item in promotions.list" :key="item">
                    {{item}}
                </span>
                
            </div>
        </div><br>
        <div id="1" class="goodParams">
            <p class='paramTitle'>店铺介绍</p><br>
            <div class="shopInfo">
                <img :src="shopInfo.shopLogo" alt="">
                <div class="shopInfo-left">
                   店铺名：<span>{{shopInfo.name}}</span><br>
                   店铺粉丝：<span>{{shopInfo.cFans}}人</span><br>
                   店铺商品数量：<span>{{shopInfo.cGoods}}件</span><br>
                   店铺销售量：<span>{{shopInfo.cSells}}</span><br>
                </div>
                <div class="shopInfo-right">
                    <p v-for="item in shopInfo.score" :key="item">
                        <span v-for="i in item" :key="i">{{i}}&nbsp;</span>分<br>
                    </p>
                </div>
            </div><br>
            <p class='paramTitle'>产品参数</p><br>
            <table>
                <tr v-for="item in itemParamSet" :key="item">
                    <td v-for="i in item" :key="i">{{i}}</td>
                </tr>
            </table><br>
            <p class='paramTitle'>尺码说明</p><br>
            <table>
                <tr v-for="item in itemParamsRule" :key="item">
                    <td v-for="i in item" :key="i">
                        <tr v-for="i in i" :key="i">{{i}}</tr>
                    </td>
                </tr>
            </table><br>
            <p class="constru">※ 以上尺寸为实物人工测量，因测量当时不同会有1-2cm误差，相关数据仅作参考，以收到实物为准。</p>
       </div><br>
       <div id="2" class="GoodDetail">
           <div class="GoodDetailTitle">穿着效果</div><br>
           <div class="GoodDetailShow">
                <div v-for="item in skuInfo.skus" :key="item">
                    <img :src="item.img">
                </div><br>
           </div>

       </div>  
       <div id="3" class="comments">
           <p class="commentsTitle">商品评价</p><br>
           <div class="comCont" v-for="item in commentsUser" :key="item">
               <div class="comUser" >
                   <img :src="item.user.avatar" alt="">
                   <ul>
                       <li>{{item.user.uname}}</li>
                       <li>时间：{{item.created}} | 产品：{{item.style}}</li>
                   </ul>
               </div><br>
               <p>{{item.content}}</p>        
           </div>
       </div>
    </div>
</template>
<script>
import Swiper from '@/components/common/Swiper'
export default {
    name:'GoodCon',
    components:{
        Swiper
    },
    data(){
        return{
            
        }
    },
    props:{
        goodColumns:{
            type:Array,
            default:[]
        },
        instructions:{
            type:Array
        },
        goodParam:{
            type:Array
        },
        itemParamsRule:{
            type:Array
        },
        itemParamSet:{
            type:Array
        },
        shopInfo:{
            type:Array
        }, 
        skuInfo:{
            type:Array
        },
        promotions:{
            type:Array
        },
        commentsUser:{
            type:Array
        },
        shopParamMes:{
            type:Array
        }
    },
    methods:{
        shopClick(shopParamMes){
            console.log("加购")
            console.log(shopParamMes)
            this.$store.commit('getGoodParam',shopParamMes)
        }
    }
}
</script>
<style scoped>
    #GoodCon{
        width: 100vw;
        font-size: 14px;
    }
    li{
        list-style: none;
        margin: 0 20px;
    }
    .swiper-container{
        width:100%;
        height:350px;
        margin-top: 44px;
    }
    .swiper-container img{
        width: 100%
    }
    .goodColumns,.goodAdr{
        display: flex;
        
    }
    .goodColumns span,.goodAdr span{
        flex: 1;
    }
    .title{
        font-size:20px;
    }
    .price{
        font-size: 22px;
        color: var(--high-light);
    }
    .instructions{
        display: flex;
    }
    .instructions span{
        font-size: 13px;
        text-align: center;
    }
    .instructions img{
        vertical-align: top;
        width: 16px;
        flex:1

    }
    .detailBottomBar{
        width: 100vw;
        position: fixed;
        height: 50px;
        bottom:0;
        text-align: center;
        background:#fff;
        display: flex;
        z-index: 12;
        font-size: 14px;
    }
    .detailBottomBar span{
        flex: 1;
        padding-top: 10px;
    }
    .shop{
        line-height: 35px;
        background-color: var(--color-tint);
    }
    .buy{
        line-height: 35px;
        color: #fff;
        background-color: orange;
    }
    .goodContent{
        /* height: 85vh; */
        border-bottom: 2px solid #eee;
    }
    .paramTitle,.GoodDetailTitle,.commentsTitle{
        font-size: 22px;
        font-weight: bold;
        margin-top: 20px;
    }
    .goodParams{
        width: 100vw;
        margin-top: 20px;
        border-bottom: 2px solid #eee;
    }
    th{
        font-weight: normal;
    }
    table{
        width: 95vw;
        text-align: center;
        border: solid 1px #eee;
        padding: 5px;
        margin: 0 auto;
    }
    .promotions{
        display: flex;
    }
    .promotions span{
        flex:1;
    }
    .constru{
        font-size: 14px;
    }
    .shopInfo{
        display: flex;
        text-align: center;
    }
    .shopInfo-left,.shopInfo-right{
        flex: 1;
    }
    .shopInfo img{
        width: 76px;
    }
    .GoodDetail{
        width:100vw;
        border: solid 1px #eee;
    }
    .GoodDetailShow{
        width: 100vw;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }
    .GoodDetailShow img{
        width: 90vw;
    }
    .comCont{
        width: 90vw;
        height: 20vh;
        margin: 0 auto;
    }
    .comUser img{
        width: 40px;
    }
    .comUser{
        display: flex;
        
    }
</style>