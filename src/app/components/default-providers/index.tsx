'use client'
import { ShoppingCartProvider } from '@/contexts/cart-context'
import { FavoriteProvider } from '@/contexts/favorite-context'
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
        <FavoriteProvider>
          <ShoppingCartProvider>{children}</ShoppingCartProvider>
        </FavoriteProvider>
      </OrderProvider>
    </FilterFoodProvider>
  )
}
