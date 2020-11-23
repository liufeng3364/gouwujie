<template>
  <div>
    <router-view/>
    <Tabbar v-if="$store.state.tabBarIsShow"></Tabbar>
  </div>

</template>
<script>
  import Tabbar from "./components/common/tabbar/Tabbar";
  export default {
    name:'App',
    components:{
      Tabbar
    }
  }
</script>
<style>
@import "assets/css/base.css";
</style>
