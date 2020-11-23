import { createStore } from 'vuex'

export default createStore({
  state: {
    tabBarIsShow:true
  },
  mutations: {
    tabBarIsChange(state,change){
      state.tabBarIsShow=change
    }
  },
  actions: {
  },
  modules: {
  }
})
