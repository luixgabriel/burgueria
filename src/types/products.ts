import { FoodsType } from './food-enums'

export interface IAdditional {
  id: number
  name: string
  price: number
  quantity: number
}

export interface IProducts {
  id: number
  name: string
  price: number
  category: FoodsType
  favorite?: boolean
  description: string
  observation?: string
  additional?: IAdditional[]
  quantity: number
}
