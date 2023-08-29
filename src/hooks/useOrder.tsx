import { OrderContext } from '@/contexts/order-context'
import { useContext } from 'react'

export function useOrderContext() {
  return useContext(OrderContext)
}
