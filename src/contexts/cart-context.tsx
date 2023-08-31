import { createContext, useContext, useState } from 'react'
import { IProducts } from '@/types/products'
import setCookie from '@/utils/cookies'
import { useLocalStorage } from '@/hooks/useLocalStorage'

interface ShoppingCartContext {
  openCart: () => void
  closeCart: () => void
  increaseCart: (product: IProducts) => void
  removeFromCart: (id: number) => void
  cartQuantity: number
  cartItems: IProducts[]
}

interface ShoppingCartProviderProps {
  children: React.ReactNode
}

export const ShoppingCartContext = createContext({} as ShoppingCartContext)

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [cartItems, setCartItems] = useState<IProducts[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const { value, updateLocalStorage } = useLocalStorage<IProducts[]>(
    'products',
    [],
  )

  const cartQuantity = cartItems.length

  const openCart = () => setIsOpen(true)
  const closeCart = () => setIsOpen(false)

  function increaseCart(product: IProducts) {
    if (value.length === 0) {
      updateLocalStorage([product])
    } else {
      value.push(product)
      updateLocalStorage(value)
    }
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
        openCart,
        closeCart,
        cartItems,
        cartQuantity,
      }}
    >
      {children}
      {/* <ShoppingCart isOpen={isOpen} /> */}
    </ShoppingCartContext.Provider>
  )
}
