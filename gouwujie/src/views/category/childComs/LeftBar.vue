<template>
    <div class="leftBar">
       <ul>
           <li v-for="(item,index) in leftList" :key="(item,index)"
           :class="{activeClass:index==currentIndex}"
           @click="itemClick(item.maitKey,index)">
               {{item.title}}
           </li>
       </ul>
    </div>
</template>
<script>
export default {
    name:'LeftBar',
    data(){
        return{
            currentIndex:0
        }
    },
    props:{
        leftList:{
            type:Array,
            default:[]
        }
    },
    methods:{
        itemClick(maitKey,index){
            this.currentIndex=index,
            this.$emit("itemClick",maitKey)
        }
    }
}
</script>
<style>
    .leftBar{
        position: fixed;
        width: 30vw;
        height: 90vh;
        background: #eee;
        top:44px;
        text-align: center;
        overflow: scroll;
    }
    .leftBar ul li{
        list-style: none;
        padding: 18px 10px;
        font-size: var(--font-size);
    }
    .activeClass{
        color: var(--color-tint);
        font-weight: bold;
        background: #fff;
    }
</style>