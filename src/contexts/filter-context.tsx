import { FoodsType } from '@/types/food-enums'
import { ReactNode, createContext, useState } from 'react'

interface IFilterFoodContext {
  food: FoodsType
  setFood: (value: FoodsType) => void
}

interface FilterFoodContextProps {
  children: ReactNode
}

export const FilterFoodContext = createContext({} as IFilterFoodContext)

export function FilterFoodProvider({ children }: FilterFoodContextProps) {
  const [food, setFood] = useState<FoodsType>(FoodsType.HAMBURGER)

  return (
    <FilterFoodContext.Provider value={{ food, setFood }}>
      {children}
    </FilterFoodContext.Provider>
  )
}
