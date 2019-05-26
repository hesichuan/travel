import { RootStateTypes } from './types'
import { State } from 'vuex-class'

let defaultCity: string = '北京'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}

const state: any = {
  city: defaultCity
}
export default state
