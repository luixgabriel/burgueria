'use client'
import { createContext, useEffect, useState } from 'react'
import { IProducts } from '@/types/products'
import { useRouter } from 'next/navigation'
import { useLocalStorage } from '@/hooks/useLocalStorage'

interface ShoppingCartContext {
  increaseCart: (product: IProducts) => void
  removeFromCart: (id: number) => void
  cartItems: IProducts[]
  setCartItems: (value: IProducts[]) => void
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
  const [cartItems, setCartItems] = useState<IProducts[]>(value)
  const router = useRouter()
  useEffect(() => {
    setCartItems(value)
  }, [value])

  function increaseCart(product: IProducts) {
    const newCartItems = [...value, product]
    // if (newCartItems.length <= 1) window.location.reload()
    setCartItems(newCartItems)
    updateLocalStorage(newCartItems)
    router.push('/')
  }

  function removeFromCart(id: number) {
    setCartItems((prev) => {
      return prev.filter((item) => item.id !== id)
    })
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        increaseCart,
        removeFromCart,
        cartItems,
        setCartItems,
      }}
    >
      {children}
      {/* <ShoppingCart isOpen={isOpen} /> */}
    </ShoppingCartContext.Provider>
  )
}
