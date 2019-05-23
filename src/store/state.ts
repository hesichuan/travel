import { RootStateTypes } from './types'

let defaultCity: string = '三亚'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}

const state = {
  city: defaultCity
}
export default state
