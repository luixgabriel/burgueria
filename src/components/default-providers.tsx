'use client'
import { ShoppingCartProvider } from '@/contexts/cart-context'
import { FilterFoodProvider } from '@/contexts/filter-context'
import { OrderProvider } from '@/contexts/order-context'
import { ReactNode } from 'react'

interface DefaultProvidersProps {
  children: ReactNode
}

export function DefaultProviders({ children }: DefaultProvidersProps) {
  return (
    <FilterFoodProvider>
      <OrderProvider>
        <ShoppingCartProvider>{children}</ShoppingCartProvider>
      </OrderProvider>
    </FilterFoodProvider>
  )
}
