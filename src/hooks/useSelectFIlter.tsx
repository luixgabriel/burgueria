import { SelectedProductContext } from '@/contexts/select-context'
import { useContext } from 'react'

export function useSelectedProductContext() {
  return useContext(SelectedProductContext)
}
