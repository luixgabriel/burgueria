'use client'
import { FilterFoodProvider } from '@/contexts/filter-context'
import { OrderProvider } from '@/contexts/order-context'
import { SelectedProductProvider } from '@/contexts/select-context'
import { ReactNode } from 'react'

interface DefaultProvidersProps {
  children: ReactNode
}

export function DefaultProviders({ children }: DefaultProvidersProps) {
  return (
    <FilterFoodProvider>
      <OrderProvider>
        <SelectedProductProvider>{children}</SelectedProductProvider>
      </OrderProvider>
    </FilterFoodProvider>
  )
}
