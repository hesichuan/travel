import state from './state'
import { RootStateTypes } from './types'
import { MutationTree } from 'vuex'

const mutations: MutationTree<any> = {
  CHANGECITY (state: RootStateTypes, city: string) {
    state.city = city
    try {
      localStorage.city = city
    } catch (e) {}
  }
}

export default mutations
