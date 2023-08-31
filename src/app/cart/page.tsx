'use client'
import { AiFillDelete } from 'react-icons/ai'
import { IProducts } from '@/types/products'
import BackBtn from '../components/back-btn'
import { useCart } from '@/hooks/useCart'
import formattedPrice from '@/utils/formatPrice'
import Link from 'next/link'

export default function Cart() {
  const { cartItems, removeFromCart, calculateTotal } = useCart()
  return (
    <section className="h-screen bg-gray-100 p-4">
      <div className="flex p-4 justify-between border-b-2 border-primary">
        <h1 className="text-2xl font-bold text-primary">Pedido</h1>
        <BackBtn path="/" />
      </div>
      {cartItems.length <= 0 && (
        <div className="flex flex-col items-center mt-6">
          <h1 className="leading-5">
            Acesse o nosso cardápio online e comece a adicionar itens ao seu
            pedido!
          </h1>
          <Link href="/" className="font-bold text-primary m-2 hover:underline">
            ACESSAR
          </Link>
        </div>
      )}
      <div className="mt-6 space-y-4">
        {cartItems.map((item: IProducts) => (
          <div key={item.id} className="p-4 bg-white rounded shadow">
            <div className="flex justify-between items-start">
              <div className="w-full">
                <div className="flex items-center justify-between w-full mb-3">
                  <h1 className="text-xl font-semibold mb-2">{item.name}</h1>
                  <button>
                    <AiFillDelete
                      size={20}
                      color="red"
                      onClick={() => removeFromCart(item.id)}
                    />
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
                <h2 className="text-lg font-medium">Adicionais:</h2>
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
      <div className="flex  m-3 flex-col">
        <span className="font-semibold p-2 text-lg self-end">
          {cartItems.length <= 0
            ? ''
            : `Total: ${formattedPrice(calculateTotal(cartItems))}`}
        </span>
        <button>{cartItems.length <= 0 ? '' : 'Finalizar Pedido'}</button>
      </div>
    </section>
  )
}
