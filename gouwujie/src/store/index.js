import { createStore } from 'vuex'

export default createStore({
  state: {
    tabBarIsShow:true,
    shopParamMes:[]
  },
  mutations: {
    tabBarIsChange(state,change){
      state.tabBarIsShow=change
    },
    getGoodParam(state,shopParamMes){
      var flag = state.shopParamMes.findIndex((item)=>{
        return item.iid==shopParamMes.itemInfo.iid
      })
      if(flag==-1){
        let obj={}
        obj.iid=shopParamMes.itemInfo.iid
        obj.goodTitle=shopParamMes.itemInfo.title
        obj.goodPrice=shopParamMes.itemInfo.lowNowPrice
        obj.goodImg=shopParamMes.itemInfo.topImages[0]
        obj.shopName=shopParamMes.shopInfo.name
        obj.shopIcon=shopParamMes.shopInfo.shopLogo
        obj.count=1
        state.shopParamMes.push(obj)
      }else{
        state.shopParamMes[flag].count+=1
      } 
    },
    add(state,index){
      if(state.shopParamMes[index].count>=9){
        alert('最多购买十件商品噢')
      }
      state.shopParamMes[index].count++
      // console.log(state.shopParamMes.count)
    },
    reduce(state,index){
      if(state.shopParamMes[index].count<=2){
        alert('最少购买一件商品噢')

      }
      state.shopParamMes[index].count--
    }
  },
  actions: {
  },
  modules: {
  }
})
export const ADD='add'
export const REDUCE='reduce'
