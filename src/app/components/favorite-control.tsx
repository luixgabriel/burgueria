'use client'
import { AiFillHeart } from 'react-icons/ai'
import { useCart } from '@/hooks/useCart'

export function FavoriteControl() {
  const { cartItems } = useCart()

  return (
    <div className="relative cursor-pointer">
      <AiFillHeart className="text-2xl" size={25} color="004083" />
      {cartItems.length > 0 && (
        <span
          className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 
                   bg-yellow-400 text-white text-xs rounded-full 
                   h-5 w-5 flex items-center justify-center"
        >
          {cartItems.length}
        </span>
      )}
    </div>
  )
}
