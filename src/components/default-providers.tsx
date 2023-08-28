'use client'
import { FilterFoodProvider } from '@/contexts/filter-context'
import { ReactNode } from 'react'

interface DefaultProvidersProps {
  children: ReactNode
}

export function DefaultProviders({ children }: DefaultProvidersProps) {
  return <FilterFoodProvider>{children}</FilterFoodProvider>
}
