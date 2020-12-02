<template>
    <div class="leftBar">
       <ul>
           <li v-for="item in leftList" :key="item">
               {{item.title}}
           </li>
       </ul>
    </div>
</template>
<script>
export default {
    name:'LeftBar',
    props:{
        leftList:{
            type:Array,
            default:[]
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
</style>