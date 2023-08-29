import { ReactNode, createContext, useState } from 'react'
import products from '@/data/products'
import { IAdditional } from '@/types/products'

interface IOrderContext {
  finalPriceOrder: number | string
  setFinalPriceOrder: (value: any) => void
  handleUpdateFinalPrice: (id: number, additionalId: number) => void
  quantity: number
  setQuantity: (value: number) => void
}

interface OrderContextProps {
  children: ReactNode
}

export const OrderContext = createContext({} as IOrderContext)

export function OrderProvider({ children }: OrderContextProps) {
  const [finalPriceOrder, setFinalPriceOrder] = useState<number>(0)
  const [quantity, setQuantity] = useState<number>(0)

  //   function increaseCartQuantity(id: number) {
  //     setCartItems((prev) => {
  //       // SE ISSO ME RETORNAR NULL EU ADICIONO NO CART
  //       if (prev.find((item) => item.id === id) == null) {
  //         return [...prev, { id, quantity: 1 }]
  //       } else {
  //         return prev.map((item) => {
  //           if (item.id === id) {
  //             return { ...item, quantity: item.quantity + 1 }
  //           } else {
  //             return item
  //           }
  //         })
  //       }
  //     })
  //   }

  const handleUpdateFinalPrice = (id: number, additionalId: number) => {
    const item = products.find((prdt) => prdt.id === id)
    let add = item?.additional?.find(
      (add) => add.id === additionalId,
    ) as IAdditional
    if (localStorage.getItem(add.name)) {
      let increaseQuantity = JSON.parse(localStorage.getItem(add.name) as any)
      increaseQuantity = {
        ...increaseQuantity,
        quantity: increaseQuantity.quantity + 1,
      }
      localStorage.setItem(add.name, JSON.stringify(increaseQuantity))
    } else {
      add = { ...add, quantity: 1 }
      localStorage.setItem(add.name, JSON.stringify(add))
    }
  }

  return (
    <OrderContext.Provider
      value={{
        finalPriceOrder,
        setFinalPriceOrder,
        quantity,
        setQuantity,
        handleUpdateFinalPrice,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}
