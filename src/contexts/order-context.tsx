import { ReactNode, createContext, useState } from 'react'

interface IOrderContext {
  finalPriceOrder: number | string
  setFinalPriceOrder: (value: number) => void
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

  return (
    <OrderContext.Provider
      value={{ finalPriceOrder, setFinalPriceOrder, quantity, setQuantity }}
    >
      {children}
    </OrderContext.Provider>
  )
}
