'use client'
import products from '@/data/products'
import { useOrderContext } from '@/hooks/useOrder'
import { useEffect } from 'react'
import { AiOutlinePlus, AiOutlineLine } from 'react-icons/ai'

export default function Product({
  searchParams,
}: {
  searchParams: { id: string }
}) {
  const { finalPriceOrder, setFinalPriceOrder, handleUpdateFinalPrice } =
    useOrderContext()
  const product = products.find((prdt) => prdt.id === Number(searchParams.id))
  useEffect(() => {
    setFinalPriceOrder(product?.price)
  }, [product, setFinalPriceOrder])
  return (
    <div className="flex justify-center items-center z-50 ">
      {product && (
        <div className=" h-full w-full flex flex-col p-3">
          <h1 className=" text-lg font-bold my-4 text-center">
            {product.name}
          </h1>
          <div className="flex flex-col gap-2">
            <h4>{product.name}</h4>
            <p>{product.description}</p>
            <span>R$ {product.price}</span>
          </div>
          <div className="flex flex-col w[90%]">
            {product.additional && (
              <>
                <h1 className="font-semibold self-center">Complementos</h1>
                {product.additional.map((add) => (
                  <div key={add.id} className="flex justify-between m-3">
                    <div>
                      <p>{`ADICIONAL (${add.name})`}</p>
                      <span>+ R$ {add.price}</span>{' '}
                    </div>
                    <div className="flex items-center gap-2">
                      <AiOutlineLine color="#004083" />
                      <span>{add.quantity}</span>
                      <AiOutlinePlus
                        className="cursor-pointer"
                        color="#004083"
                        onClick={() =>
                          handleUpdateFinalPrice(product.id, add.id)
                        }
                      />
                    </div>
                  </div>
                ))}
              </>
            )}
            <div className="w[90%]">
              <h4 className="m-2">Alguma observação?</h4>
              <textarea className="border border-primary w-full p-2 rounded-md" />
            </div>

            <div className="flex justify-between p-2 cursor-pointer">
              <div className="flex items-center gap-2">
                <AiOutlineLine color="#004083" />
                <span>1</span>
                <AiOutlinePlus color="#004083" />
              </div>
              <div className="bg-primary text-white px-7 py-2 rounded-md flex gap-3">
                <span>R$ {finalPriceOrder}</span>
                <button>Adicionar</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
