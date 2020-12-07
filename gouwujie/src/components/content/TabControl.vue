<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles" :key="{item,index}"
      class="tab-control-item" :class="{active:index==currentIndex}"
      @click="itemClick(index)"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    data(){
      return{
        currentIndex:0
      }
    },
    props:{
      titles:{
        type:Array
      }
    },
    methods:{
      itemClick(index){
        this.currentIndex=index,
        this.$emit('tabClick',index)
      }
    }
  }
</script>

<style scoped>
  .tab-control{
    display: flex;
    background: var(--color-background);
  }
  .tab-control-item{
    flex: 1;
    text-align: center;
    height: 40px;
    line-height: 40px;
  }
  .active span{
    border-bottom: 3px solid var(--high-light);
    padding-bottom: 5px;
  }
</style>
