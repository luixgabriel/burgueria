import { FoodsType } from './food-enums'

export interface IProducts {
  id: number
  name: string
  price: string
  category: FoodsType
  favorite?: boolean
  description: string
}
