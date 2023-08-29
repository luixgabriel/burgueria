import products from '@/data/products'
import { IAdditional } from '@/types/products'
import { AiOutlinePlus, AiOutlineLine } from 'react-icons/ai'

export default function Product({
  searchParams,
}: {
  searchParams: { id: string }
}) {
  const product = products.find((prdt) => prdt.id === Number(searchParams.id))

  return (
    <div className="flex justify-center items-center z-50 ">
      {product && (
        <div className="  h-screen flex flex-col p-3">
          <h1 className=" text-lg font-bold my-4 text-center">
            {product.name}
          </h1>
          <div className="flex flex-col gap-2">
            <h4>{product.name}</h4>
            <p>{product.description}</p>
            <span>R$ {product.price}</span>
          </div>
          <div className="flex flex-col">
            {product.additional ? (
              <>
                {' '}
                <h1 className="font-semibold self-center">Complemento</h1>
                {product.additional.map((add: IAdditional) => (
                  <div key={add.id} className="flex justify-between m-3">
                    <div>
                      <p>{`ADICIONAL (${add.name})`}</p>
                      <span>+ R$ {add.price}</span>{' '}
                    </div>
                    <div className="flex items-center gap-2">
                      <AiOutlineLine />
                      <span>{add.quantity}</span>
                      <AiOutlinePlus />
                    </div>
                  </div>
                ))}
                <div>
                  <h4 className="m-2">Alguma observação?</h4>
                  <textarea className="border border-primary w-full p-2 rounded-md" />
                </div>
              </>
            ) : (
              <div>
                <h4 className="m-2">Alguma observação?</h4>
                <textarea className="border border-primary w-full p-2 rounded-md" />
              </div>
            )}

            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <AiOutlineLine />
                <span>1</span>
                <AiOutlinePlus />
              </div>
              <button className="bg-red-400">Adicionar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
