'use client'
import { useFilterFoodContext } from '@/hooks/useFoodFilter'
import { FoodsType } from '@/types/food-enums'
import BurguerList from './burguer-list'
import FriesList from './fries-list'
import SodaList from './soda-list'
import BeerList from './beer-list'
import PortionsList from './portions-list'
import CombosList from './combos-list'

const FoodList = () => {
  const { food } = useFilterFoodContext()

  if (food === FoodsType.HAMBURGER) {
    return <BurguerList />
  }
  if (food === FoodsType.FRIES) {
    return <FriesList />
  }
  if (food === FoodsType.SODA) {
    return <SodaList />
  }
  if (food === FoodsType.BEERS) {
    return <BeerList />
  }
  if (food === FoodsType.PORTIONS) {
    return <PortionsList />
  }
  if (food === FoodsType.COMBOS) {
    return <CombosList />
  }
}

export default FoodList
