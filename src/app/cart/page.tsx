'use client'
import { AiFillDelete } from 'react-icons/ai'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { IAdditional, IProducts } from '@/types/products'
import BackBtn from '../components/back-btn'
import { useCart } from '@/hooks/useCart'
import formattedPrice from '@/utils/formatPrice'

export default function Cart() {
  const { cartItems } = useCart()
  return (
    <section className="h-screen bg-gray-100 p-4">
      <div className="flex p-4 justify-between border-b-2 border-primary">
        <h1 className="text-2xl font-bold">Pedido</h1>
        <BackBtn path="/" />
      </div>

      <div className="mt-6 space-y-4">
        {cartItems.map((item: IProducts) => (
          <div key={item.id} className="p-4 bg-white rounded shadow">
            <div className="flex justify-between items-start">
              <div className="w-full">
                <div className="flex items-center justify-between w-full mb-3">
                  <h1 className="text-xl font-semibold mb-2">{item.name}</h1>
                  <button>
                    <AiFillDelete size={20} color="red" />
                  </button>
                </div>

                <p className="text-gray-600 mb-2">{item.description}</p>

                <p className="text-gray-700 mb-2">
                  Preço: {formattedPrice(item.price)}
                </p>

                {item.observation && (
                  <p className="text-gray-400 italic">
                    Observação: {item.observation}
                  </p>
                )}
              </div>
            </div>
            {Object.keys(item.additional as any).length > 0 && (
              <div className="mt-3 space-y-2">
                <h2 className="text-lg font-medium">Additional:</h2>
                {Object.values(item.additional as any).map((add: any) => (
                  <div
                    key={add.id}
                    className="flex justify-between text-gray-600"
                  >
                    <span>{add.name}</span>
                    <span>
                      x{add.quantity} {formattedPrice(add.price * add.quantity)}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      {/* <button>Finalizar Pedido</button> */}
    </section>
  )
}
