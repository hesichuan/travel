import state from './state'
import { RootStateTypes } from './types'
import { MutationTree } from 'vuex'

const mutations: MutationTree<any> = {
  CHANGECITY (state: RootStateTypes, city: string) {
    state.city = city
  }
}

export default mutations
