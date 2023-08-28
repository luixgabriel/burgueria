'use client'
import { useFilterFoodContext } from '@/hooks/useFoodFilter'
import { FoodsType } from '@/types/food-enums'
import BurguerList from './burguer-list'
import FriesList from './fries-list'

const FoodList = () => {
  const { food } = useFilterFoodContext()

  if (food === FoodsType.HAMBURGER) {
    return <BurguerList />
  }
  if (food === FoodsType.FRIES) {
    return <FriesList />
  }
}

export default FoodList
