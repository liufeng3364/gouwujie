<template>
<div>
  <NavBar class="category-nav">
      <template v-slot:center>
        商品分类
      </template>
    </NavBar>
    <LeftBar :leftList="leftList" @itemClick="fuClick"/>
    <div class="rightCon">
      <div class="listItem" v-if="this.maitKey==3627">
        <div  v-for="item in rightList3627" :key="item">
          <img :src="item.image"><br>
          <span>{{item.title}}</span>
        </div>
      </div>
      <div class="listItem" v-if="this.maitKey==582">
        <div  v-for="item in rightList582" :key="item">
          <img :src="item.image"><br>
          <span>{{item.title}}</span>
        </div>
      </div>
      <div class="listItem" v-if="this.maitKey==595">
        <div  v-for="item in rightList595" :key="item">
          <img :src="item.image"><br>
          <span>{{item.title}}</span>
        </div>
      </div>
      <div class="listItem" v-if="this.maitKey==596">
        <div  v-for="item in rightList596" :key="item">
          <img :src="item.image"><br>
          <span>{{item.title}}</span>
        </div>
      </div>
      <div class="listItem" v-if="this.maitKey==598">
        <div  v-for="item in rightList598" :key="item">
          <img :src="item.image"><br>
          <span>{{item.title}}</span>
        </div>
      </div>
    </div>
</div>
</template>

<script>
import NavBar from "@/components/common/navBar/NavBar";
import LeftBar from "./childComs/LeftBar"
import {getCategoryData} from "@/network/category"
  export default {
    name: "Category",
    components:{
      NavBar,
      LeftBar
    },
   data(){
      return{
        leftList:null,
        maitKey:3627,
        rightList:[]
      }
    },
    created(){
      this.getCategoryData()
    },
    methods:{
      fuClick(maitKey){
        this.maitKey=maitKey
      },
      getCategoryData(){ 
        getCategoryData().then(res=>{
          console.log(res)
          this.leftList=res.data.category.list
          this.rightList3627=res.sub3627.data.list
          this.rightList582=res.sub582.data.list
          this.rightList595=res.sub595.data.list
          this.rightList596=res.sub596.data.list
          this.rightList598=res.sub598.data.list
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
  .rightCon{
      position:fixed;
      width: 65vw;
      height: 90vh;
      /* background: forestgreen; */
      left: 30vw;
      top: 44px;
      overflow: scroll;
      padding: 2vh 0;
    }
    .listItem{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
    }
    .rightCon img{
      width: 30vw;
    }
    span{
      width: 30vw;
      display: block;
      text-align: center;
    }
</style>
