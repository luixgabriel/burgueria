import { ReactNode, createContext, useState } from 'react'
import products from '@/data/products'
import { json } from 'stream/consumers'

interface IOrderContext {
  totalPrice: number
  setTotalPrice: (value: number) => void
  handleUpdateFinalPrice: (
    additionId: number,
    additionPrice: number,
    additionName: string,
  ) => void
  additionalsInfo: any
  setAdditionalsInfo: (value: any) => void
}

interface OrderContextProps {
  children: ReactNode
}

export const OrderContext = createContext({} as IOrderContext)

export function OrderProvider({ children }: OrderContextProps) {
  const [totalPrice, setTotalPrice] = useState<number>(0)
  const [additionalsInfo, setAdditionalsInfo] = useState<any>({})

  const handleUpdateFinalPrice = (
    additionId: number,
    additionPrice: number,
    additionName: string,
  ) => {
    const currentAdditional = additionalsInfo[additionId] || {}

    const updatedQuantity = (currentAdditional.quantity || 0) + 1

    const updatedAdditionalsInfo = {
      ...additionalsInfo,
      [additionId]: {
        name: additionName,
        price: additionPrice,
        quantity: updatedQuantity,
      },
    }
    setAdditionalsInfo(updatedAdditionalsInfo)
  }

  localStorage.setItem('additionalsInfo', JSON.stringify(additionalsInfo))

  return (
    <OrderContext.Provider
      value={{
        totalPrice,
        setTotalPrice,
        handleUpdateFinalPrice,
        additionalsInfo,
        setAdditionalsInfo,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}
