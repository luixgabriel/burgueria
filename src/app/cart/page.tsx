'use client'

import { useLocalStorage } from '@/hooks/useLocalStorage'
import { IProducts } from '@/types/products'

export default function Cart() {
  const { value } = useLocalStorage('products', [])
  return (
    <div>
      {value.map((item: IProducts) => (
        <h1 key={item.id}>{item.name}</h1>
      ))}
    </div>
  )
}
