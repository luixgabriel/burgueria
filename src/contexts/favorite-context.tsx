import { IProducts } from '@/types/products'
import { ReactNode, createContext, useEffect, useState } from 'react'
import { useLocalStorage } from '@/hooks/useLocalStorage'

interface IFavoriteProductContext {
  favProducts: IProducts[]
  setFavProducts: (value: any) => void
  isOpen: boolean
  setIsOpen: (value: boolean) => void
  handleFavoriteProduct: (product: IProducts) => void
}

interface FavoriteContextProps {
  children: ReactNode
}

export const FavoriteProductContext = createContext(
  {} as IFavoriteProductContext,
)

export function FavoriteProvider({ children }: FavoriteContextProps) {
  const { value, updateLocalStorage } = useLocalStorage<IProducts[]>('fav', [])
  const [favProducts, setFavProducts] = useState<IProducts[]>(value)
  const [isOpen, setIsOpen] = useState<boolean>(false)

  useEffect(() => {
    setFavProducts(value)
  }, [value])

  function handleFavoriteProduct(product: IProducts) {
    const newProduct = { ...product, favorite: true }
    const newFavProducts = [...value, newProduct]
    setFavProducts(newFavProducts)
    updateLocalStorage(newFavProducts)
  }

  return (
    <FavoriteProductContext.Provider
      value={{
        favProducts,
        setFavProducts,
        handleFavoriteProduct,
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </FavoriteProductContext.Provider>
  )
}
