'use client'
import { useFilterFoodContext } from '@/hooks/useFoodFilter'
import ProductsList from './products-list'

const FoodList = () => {
  const { food, filterFood } = useFilterFoodContext()
  return <ProductsList product={food} arr={filterFood} />
}

export default FoodList
