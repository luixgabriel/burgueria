import { FilterFoodContext } from '@/contexts/filter-context'
import { useContext } from 'react'

export function useFilterFoodContext() {
  return useContext(FilterFoodContext)
}
