<template>
  <div>
    <NavBar class="home-nav">
      <template v-slot:center>
        购物街
      </template>
    </NavBar>
    <Swiper>
      <template v-slot:SwiperContent>
        <div class="swiper-slide" v-for="item in bannerList" :key="item">
          <a :href="item.link">
            <img :src="item.image" alt="">
          </a>
        </div><br>
      </template>
    </Swiper>
    <!--    <推荐></推荐>-->
    <TabControl :titles=titles  @tabClick="tabClick"></TabControl>
<!--    <tab-control></tab-control>-->
    <!-- <GoodsList :goods="goods[currentType].list"></GoodsList> -->
    <GoodsList :goods="goods[['pop','new','sell'][currentIndex]].list"></GoodsList>

  </div>
</template>

<script>
  import NavBar from "components/common/navBar/NavBar";
  import {getHomeMultidata,getHomeGoods} from "network/home";
  import Swiper from "components/common/Swiper";
  import TabControl from "../../components/content/TabControl";
  import GoodsList from '../../components/content/goods/GoodsList'

  export default {
    name: "Home",
    components: {
      NavBar,
      Swiper,
      TabControl,
      GoodsList
    },
    data() {
      return {
        // result: null,
        bannerList: null,
        titles:['流行','新款','精选'],
        goods:{
          'pop':{page:0,list:[]},
          'new':{page:0,list:[]},
          'sell':{page:0,list:[]}
        },
        // currentType:"pop"
        currentIndex:0
      }
    },
    created() {
      this.getHomeMultidata()
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
      // console.log(this.goods)
      this.tabBarIsChange()
    },
    methods:{
      getHomeMultidata(){
        getHomeMultidata().then(res => {
        this.bannerList = res.data.banner.list
      })
      },
      getHomeGoods(type){
        const page = this.goods[type].page+1
        getHomeGoods(type,page).then(res=>{
          // console.log(res.data.list)
          // this.goods[type].list=res.data.list
          this.goods[type].list.push(...res.data.list)
      })
      },
      tabClick(index){
        // this.currentType=['pop','new','sell'][index]
        this.currentIndex=index
      },
      tabBarIsChange(){
        this.$store.commit('tabBarIsChange',true)
      }
    }
  }
</script>

<style scoped>
  .home-nav {
    background: var(--color-tint);
    color: #fff;
  }
  .tab-control{
    position: sticky;
    top: 44px;
  }
    .swiper-container{
    width:100%;
    /*height:300px*/
    margin-top: 44px;
  }
.swiper-container img{width: 100%}
</style>
