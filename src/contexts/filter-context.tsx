import { FoodsType } from '@/types/food-enums'
import { IProducts } from '@/types/foods'
import products from '@/data/products'
import { ReactNode, createContext, useState } from 'react'

interface IFilterFoodContext {
  food: FoodsType
  setFood: (value: FoodsType) => void
  filterFood: IProducts[]
}

interface FilterFoodContextProps {
  children: ReactNode
}

export const FilterFoodContext = createContext({} as IFilterFoodContext)

export function FilterFoodProvider({ children }: FilterFoodContextProps) {
  const [food, setFood] = useState<FoodsType>(FoodsType.hamburguer)
  const filterFood = products.filter((products) => products.category === food)

  return (
    <FilterFoodContext.Provider value={{ food, setFood, filterFood }}>
      {children}
    </FilterFoodContext.Provider>
  )
}
