import { IProducts } from '@/types/products'
import { ReactNode, createContext, useEffect, useState } from 'react'
import { useLocalStorage } from '@/hooks/useLocalStorage'

interface IFavoriteProductContext {
  favProducts: IProducts[]
  isOpen: boolean
  setIsOpen: (value: boolean) => void
  handleFavoriteProduct: (product: IProducts) => void
  isProductFavorited(productId: number): boolean
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
    console.log(product)
    const newProduct = { ...product, favorite: true, additional: [] }
    console.log(newProduct)
    if (isProductFavorited(newProduct.id)) {
      const products = favProducts.filter((item) => item.id !== newProduct.id)
      setFavProducts(products)
      updateLocalStorage(products)
      return
    }
    const newFavProducts = [...value, newProduct]
    setFavProducts(newFavProducts)
    updateLocalStorage(newFavProducts)
  }

  function isProductFavorited(productId: number) {
    return favProducts.some((item) => item.id === productId)
  }

  return (
    <FavoriteProductContext.Provider
      value={{
        favProducts,
        handleFavoriteProduct,
        isProductFavorited,
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </FavoriteProductContext.Provider>
  )
}
