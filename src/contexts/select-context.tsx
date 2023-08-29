import { ReactNode, createContext, useState } from 'react'

interface ISelectedProductContext {
  selectedProduct: any
  setSelectedProduct: (value: any) => void
}

interface SelectedProductContextProps {
  children: ReactNode
}

export const SelectedProductContext = createContext(
  {} as ISelectedProductContext,
)

export function SelectedProductProvider({
  children,
}: SelectedProductContextProps) {
  const [selectedProduct, setSelectedProduct] = useState<any>(null)

  return (
    <SelectedProductContext.Provider
      value={{ selectedProduct, setSelectedProduct }}
    >
      {children}
    </SelectedProductContext.Provider>
  )
}
