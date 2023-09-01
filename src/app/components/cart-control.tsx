'use client'
import { AiFillShopping } from 'react-icons/ai'
import { useRouter } from 'next/navigation'
import { useCart } from '@/hooks/useCart'
export function CartControl() {
  const { cartItems } = useCart()
  const router = useRouter()
  return (
    <div
      className="relative cursor-pointer"
      onClick={() => router.push('/cart')}
    >
      <AiFillShopping className="text-2xl" size={25} color="004083" />
      {cartItems.length > 0 && (
        <span
          className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 
                   bg-red-500 text-black text-sm rounded-full 
                   h-5 w-5 flex items-center justify-center"
        >
          {cartItems.length}
        </span>
      )}
    </div>
  )
}
