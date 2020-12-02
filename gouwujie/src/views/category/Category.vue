<template>
<div>
  <NavBar class="category-nav">
      <template v-slot:center>
        商品分类
      </template>
    </NavBar>
    <LeftBar :leftList="leftList"/>
    <RightCon/>
</div>
</template>

<script>
import NavBar from "@/components/common/navBar/NavBar";
import LeftBar from "./childComs/LeftBar"
import {getCategoryData} from "@/network/category"
import RightCon from './childComs/RightCon'
  export default {
    name: "Category",
    components:{
      NavBar,
      LeftBar,
      RightCon
    },
   data(){
      return{
        leftList:null
      }
    },
    created(){
      this.getCategoryData()
    },
    methods:{
      getCategoryData(){
        getCategoryData().then(res=>{
          console.log(res)
          this.leftList=res.data.category.list
        })
      }
    }
  }
</script>

<style scoped>
  .category-nav{
    background: var(--color-tint);
    color: #fff;
  }
</style>
