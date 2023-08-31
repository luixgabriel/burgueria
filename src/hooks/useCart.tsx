import { ShoppingCartContext } from '@/contexts/cart-context'
import { useContext } from 'react'

export function useCart() {
  return useContext(ShoppingCartContext)
}
