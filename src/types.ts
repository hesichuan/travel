/** vue-awesome-swiper plugins */
interface Pagination {
  el: string
  type?: string
}
export interface SwiperOption {
  pagination: Pagination
  loop: boolean
  observer?: boolean
  observeParents?: boolean
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
/** Detail 模块 */
export interface SightName {
  sightName: string
}
export interface BannerImg {
  bannerImg: string
}
export interface GallaryImgs {
  gallaryImgs: Array<string>
}
export interface CategoryList {
  title: string
  children?: Array<CategoryList>
}