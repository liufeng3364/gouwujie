<template>
    <div id="GoodCon">
        <div class="goodContent">
            <Swiper>
                <template v-slot:SwiperContent>
                    <div class="swiper-slide" v-for="item in goodParam.topImages" :key="item">
                        <img :src="item" alt="">
                    </div>
                </template>
            </Swiper><br>
            <div class="detailBottomBar">
            <span>
                <img src="../../../assets//img//tabbar/service.svg" alt=""><br>
                客服
            </span>
            <span>
                <img src="../../../assets//img//tabbar/store.svg" alt=""><br>
                店铺
            </span>
            <span>
                <img src="../../../assets//img//tabbar/collection.svg" alt=""><br>
                收藏
            </span>
            <span class="shop" @click="shopClick()">
                加入购物车
            </span>
            <span class="buy">
                购买
            </span>
            </div>
            <p class="title">{{goodParam.title}}</p><br>
            <p class="price">{{goodParam.price}}</p><br>
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
        <div class="goodParams">
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
       <div class="GoodDetail">
           <div class="GoodDetailTitle">穿着效果</div><br>
           <div class="GoodDetailShow">
                <div v-for="item in skuInfo.skus" :key="item">
                    <div class="other">
                        <span>价格：{{skuInfo.priceRange}}</span><br>
                        <span>尺码：{{item.size}}</span><br>
                        <span>尺码编号：{{item.sizeId}}</span><br>
                        <span>类型：{{item.style}}</span><br>
                        <span>类型编号：{{item.styleId}}</span><br>
                        <span>库存：{{item.stock}}</span><br>
                        <span>库存编号：{{item.stockId}}</span><br>
                    </div>
                    <img :src="item.img">
                </div><br>
           </div>

       </div>
       <div class="commend">

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
            // instructions:['延误必赔','退货补运费','全国包邮','7天无理由退货']
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
        }
    },
    methods:{
        shopClick(){
            alert("加入购物车成功")
        }
    }
}
</script>
<style scoped>
    #GoodCon{
        width: 100vw;
        font-size: 14px;
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
        height: 85vh;
        border-bottom: 2px solid #eee;
    }
    .paramTitle,.GoodDetailTitle{
        font-size: 22px;
        font-weight: bold;

    }
    .goodParams{
        width: 100vw;
        height: 85vh;
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
        height: 760vh;
        border: solid 1px #eee;
    }
    .GoodDetailShow{
        width: 100vw;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }
    .other{
        width:40vw;
        padding-left:20px;
        height: 50vh;
        float: left;
    }
    .GoodDetailShow img{
        width: 60vw;
        height: 45vh;
        float: right;
        padding-right: 10px;
    }
    .commend{
        width: 100vw;
        height: 20vh;
    }
</style>