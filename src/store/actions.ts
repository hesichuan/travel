import state from './state'
import { RootStateTypes } from './types'
import { ActionTree } from 'vuex'

const actions: ActionTree<RootStateTypes, any> = {
  changeCity ({ commit, state: RootStateTypes }, city: string) {
    commit('CHANGECITY', city)
  }
}

export default actions
