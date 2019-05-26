/** vue-awesome-swiper plugins */
export interface Pagination {
  el: string
}
export interface SwiperOption {
  pagination: Pagination
  loop: boolean
}

/** Home 模块 */
export interface IconList {
  id: number | string
  filename: string
  desc: string
  alt?: string
}
export interface RecommendList {
  id: number | string
  filename: string
  title: string
  desc: string
}
export interface SwiperList {
  id: number | string
  filename: string
  alt?: string
}
export interface WeekendList {
  id: number | string
  filename: string
  title: string
  desc: string
}
/** City 模块 */
export interface Cities {
  [key: string]: {
    id: number
    spell: string
    name: string
  }
}
export interface HotCities {
  id: number
  spell: string
  name: string
}
