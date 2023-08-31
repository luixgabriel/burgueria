'use client'
import { AiFillShopping } from 'react-icons/ai'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { useRouter } from 'next/navigation'
export function CartControl() {
  const { value } = useLocalStorage('products', [])
  const router = useRouter()
  return (
    <div
      className="relative cursor-pointer"
      onClick={() => router.push('/cart')}
    >
      <AiFillShopping className="text-2xl" size={25} color="004083" />
      {value.length > 0 && (
        <span
          className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 
                   bg-red-500 text-white text-xs rounded-full 
                   h-5 w-5 flex items-center justify-center"
        >
          {value.length}
        </span>
      )}
    </div>
  )
}
