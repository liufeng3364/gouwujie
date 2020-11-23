<template>
    <div class="goods-item" @click="itemClick()">
        <img :src="goodsItem.show.img" alt="">
        <div>
            <p>{{goodsItem.title}}</p>
            <span>价格：￥{{goodsItem.price}}</span><br>
            <span>收藏：{{goodsItem.cfav}}</span>
        </div>
    </div>
</template>
<script>
export default {
    name:'GoodsListItem',
    props:{
        goodsItem:{
            type:Object,
            default:[]
        }
    } ,
    methods:{
        itemClick(){
            this.$router.push('/detail'+this.goodsItem.iid)
        }
    }  
}
</script>
<style scoped>
    .goods-item{
        width: 50vw;
        float: left;
        /* height: 380px; */
    }
    .goods-item img{
        width: 50vw;
        padding: 5px;
    }
    span,p{
        font-size: 13px;
    }
</style>