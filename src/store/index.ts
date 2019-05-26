import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import state from './state'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const store: Store<any> = new Vuex.Store({
  actions,
  mutations,
  state,
})

export default store
