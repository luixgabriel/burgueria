import { useCart } from '@/hooks/useCart'
import { useFavorite } from '@/hooks/useFavorite'
import { IProducts } from '@/types/products'
import { useEffect, useRef } from 'react'

const FavContainer = () => {
  const { isOpen, favProducts, setIsOpen } = useFavorite()
  const { increaseCart } = useCart()
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])
  return (
    isOpen && (
      <div
        ref={containerRef}
        className="absolute top-20 right-8 transition-all"
      >
        <div className="w-3 h-3 bg-white border-t-2 border-l-2 border-primary rotate-45 absolute -top-1.5 right-8"></div>
        <div className="w-64 max-h-[450px] overflow-y-auto bg-white border-2 border-primary rounded shadow-lg p-3">
          {favProducts.length === 0 ? (
            <p className="text-gray-700">
              Adicione um produto ao seus favoritos.
            </p>
          ) : (
            favProducts.map((item: IProducts) => (
              <div
                key={item.id}
                className="bg-white p-2 m-2 rounded-lg shadow-md"
              >
                <p className=" text-lg mb-2 text-primary">{item.name}</p>
                <p className="text-gray-700">{item.description}</p>
                <button
                  className=" m-2 text-md bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none text-white px-3 py-1 rounded-md transition-transform transform duration-150"
                  onClick={() => increaseCart(item)}
                >
                  Adicionar ao Carrinho
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    )
  )
}

export default FavContainer
