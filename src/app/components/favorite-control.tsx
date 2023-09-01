'use client'
import { AiFillHeart } from 'react-icons/ai'
import { useFavorite } from '@/hooks/useFavorite'
export function FavoriteControl() {
  const { isOpen, setIsOpen, favProducts } = useFavorite()
  return (
    <div
      className="relative cursor-pointer "
      onClick={() => setIsOpen(!isOpen)}
    >
      <AiFillHeart className="text-2xl" size={25} color="004083" />
      {favProducts.length > 0 && (
        <span
          className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 
                   bg-yellow-400 text-white text-xs rounded-full 
                   h-5 w-5 flex items-center justify-center"
        >
          {favProducts.length}
        </span>
      )}
    </div>
  )
}
