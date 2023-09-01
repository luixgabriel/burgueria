import { FavoriteProductContext } from '@/contexts/favorite-context'
import { useContext } from 'react'

export function useFavorite() {
  return useContext(FavoriteProductContext)
}
