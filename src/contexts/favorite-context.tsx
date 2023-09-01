import { IProducts } from '@/types/products'
import products from '@/data/products'
import { ReactNode, createContext, useState } from 'react'

interface IFavoriteProductContext {
  favProducts: IProducts[]
  setFavProducts: (value: any) => void
}

interface FavoriteContextProps {
  children: ReactNode
}

export const FavoriteProductContext = createContext(
  {} as IFavoriteProductContext,
)

export function FavoriteProvider({ children }: FavoriteContextProps) {
  const [favProducts, setFavProducts] = useState<IProducts[]>([])

  return (
    <FavoriteProductContext.Provider value={{ favProducts, setFavProducts }}>
      {children}
    </FavoriteProductContext.Provider>
  )
}
