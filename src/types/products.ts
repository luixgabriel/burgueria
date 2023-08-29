import { FoodsType } from './food-enums'

export interface IAdditional {
  id: number
  name: string
  price: string
  quantity: number
}

export interface IProducts {
  id: number
  name: string
  price: string
  category: FoodsType
  favorite?: boolean
  description: string
  additional?: IAdditional[]
}
