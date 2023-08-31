'use client'
import products from '@/data/products'
import { useOrderContext } from '@/hooks/useOrder'
import setCookie from '@/utils/cookies'
import formattedPrice from '@/utils/formatPrice'
import { useEffect, useState } from 'react'
import { AiOutlinePlus, AiOutlineLine } from 'react-icons/ai'

export default function Product({
  searchParams,
}: {
  searchParams: { id: string }
}) {
  const {
    totalPrice,
    setTotalPrice,
    additionalsInfo,
    handleUpdateFinalPrice,
    handleDecreaseFinalPrice,
  } = useOrderContext()

  const [selectedProduct, setSelectedProduct] = useState<number>(1)
  const [observation, setObservation] = useState<string>('')
  const product = products.find((prdt) => prdt.id === Number(searchParams.id))

  const calculateTotalAdditionals = () => {
    return Object.values(additionalsInfo).reduce(
      (sum: any, additional: any) =>
        sum + additional.price * additional.quantity,
      0,
    )
  }

  const calculateTotalProduct = () => {
    if (product?.price) return selectedProduct * product?.price
    return 0
  }

  useEffect(() => {
    setTotalPrice(product?.price as number)
  }, [])

  useEffect(() => {
    const totalAdditionals = calculateTotalAdditionals() as any
    const totalProducts = calculateTotalProduct()
    setCookie('additional', JSON.stringify(additionalsInfo), 7)
    setCookie('select_product_quantity', selectedProduct, 7)
    setTotalPrice(totalAdditionals + totalProducts)
  }, [additionalsInfo, selectedProduct])

  return (
    <div className="flex justify-center items-center z-50 ">
      {product && (
        <div className=" h-full w-full flex flex-col p-3">
          <h1 className=" text-lg font-bold my-4 text-center">
            {product.name}
          </h1>
          <div className="flex flex-col gap-2 p-2">
            <h4>{product.name}</h4>
            <p>{product.description}</p>
            <span className="font-semibold">
              {formattedPrice(product.price)}
            </span>
          </div>
          <div className="flex flex-col w[90%] mt-2">
            {product.additional && (
              <>
                <h1 className="font-semibold self-center ">Complementos</h1>
                {product.additional.map((add) => (
                  <div key={add.id} className="flex justify-between m-3">
                    <div>
                      <p>{`ADICIONAL (${add.name})`}</p>
                      <span>+ {formattedPrice(add.price)}</span>{' '}
                    </div>
                    <div className="flex items-center gap-2">
                      <AiOutlineLine
                        className="cursor-pointer"
                        color="#004083"
                        onClick={() =>
                          handleDecreaseFinalPrice(add.id, add.price)
                        }
                      />
                      <span>{additionalsInfo[add.id]?.quantity || 0}</span>
                      <AiOutlinePlus
                        className="cursor-pointer"
                        color="#004083"
                        onClick={() =>
                          handleUpdateFinalPrice(add.id, add.price, add.name)
                        }
                      />
                    </div>
                  </div>
                ))}
              </>
            )}
            <div className="w[90%]">
              <h4 className="m-3">Alguma observação?</h4>
              <textarea
                className="border border-primary w-full p-2 rounded-md"
                onChange={(e) => setObservation(e.target.value)}
              />
            </div>

            <div className="flex justify-between p-2 cursor-pointer">
              <div className="flex items-center gap-2">
                <AiOutlineLine
                  color="#004083"
                  onClick={() =>
                    setSelectedProduct((prev) => (prev > 1 ? prev - 1 : 1))
                  }
                />
                <span>{selectedProduct}</span>
                <AiOutlinePlus
                  color="#004083"
                  onClick={() => setSelectedProduct((prev) => prev + 1)}
                />
              </div>
              <div className="bg-primary text-white px-7 py-2 rounded-md flex gap-3">
                <span>{formattedPrice(totalPrice)}</span>
                <button>Adicionar</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
