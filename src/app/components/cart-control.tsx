'use client'
import { AiFillShopping } from 'react-icons/ai'
import { useLocalStorage } from '@/hooks/useLocalStorage'

// const CartCount = styled.span`
//   width: 17px;
//   height: 17px;
//   border-radius: 100%;
//   padding: 0 5px;
//   font-size: 10px;

//   background-color: var(--delete-color);
//   color: white;

//   margin-left: -10px;
// `
// const Container = styled.div`
//   position: relative;
// `

export function CartControl() {
  const { value } = useLocalStorage('products', [])
  return (
    <div className="relative">
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
