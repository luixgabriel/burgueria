'use client'
import { createContext, useEffect, useState } from 'react'
import { IProducts } from '@/types/products'
import { useRouter } from 'next/navigation'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { useFavorite } from '@/hooks/useFavorite'

interface ShoppingCartContext {
  increaseCart: (product: IProducts) => void
  removeFromCart: (id: number) => void
  cartItems: IProducts[]
  setCartItems: (value: IProducts[]) => void
  calculateTotal: (value: IProducts[]) => number
}

interface ShoppingCartProviderProps {
  children: React.ReactNode
}

export const ShoppingCartContext = createContext({} as ShoppingCartContext)

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const { value, updateLocalStorage } = useLocalStorage<IProducts[]>(
    'products',
    [],
  )
  const { setIsOpen } = useFavorite()
  const [cartItems, setCartItems] = useState<IProducts[]>(value)

  const router = useRouter()
  useEffect(() => {
    setCartItems(value)
  }, [value])

  function increaseCart(product: IProducts) {
    const newCartItems = [...value, product]
    setCartItems(newCartItems)
    updateLocalStorage(newCartItems)
    setIsOpen(false)
    router.push('/cart')
  }

  function removeFromCart(productId: number) {
    const productIndex = value.findIndex((product) => product.id === productId)
    if (productIndex !== -1) {
      const newCartItems = [...value]
      newCartItems.splice(productIndex, 1)
      setCartItems(newCartItems)
      updateLocalStorage(newCartItems)
    }
  }

  function calculateTotal(cartItems: IProducts[]): number {
    return cartItems.reduce((acc, item) => {
      let totalForItem: number = item.price

      // Verifica se item.additional é um array e tem algum elemento
      if (Array.isArray(item.additional) && item.additional.length > 0) {
        totalForItem += item.additional.reduce((addAcc, add) => {
          return addAcc + add.price * add.quantity
        }, 0)
      }

      return acc + totalForItem
    }, 0)
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        increaseCart,
        removeFromCart,
        cartItems,
        setCartItems,
        calculateTotal,
      }}
    >
      {children}
      {/* <ShoppingCart isOpen={isOpen} /> */}
    </ShoppingCartContext.Provider>
  )
}
