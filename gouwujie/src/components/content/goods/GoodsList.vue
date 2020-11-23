<template>
    <div id="GoodsList">
        <GoodsListItem v-for="item in goods" :goods-item="item" :key="item"></GoodsListItem>
    </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'
export default {
    name:'GoodsList',
    props:{
        goods:{
            type:Array,
            default:[]
        }
    },
    components:{
        GoodsListItem
    }
}
</script>

<style scoped>
    #GoodsList{
        width: 100vw;
    }
</style>