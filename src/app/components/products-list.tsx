import { IProducts } from '@/types/foods'
import { Heart } from 'lucide-react'

interface ProductsListProps {
  product: string
  arr: IProducts[]
}

const ProductsList = ({ product, arr }: ProductsListProps) => {
  return (
    <div className="mt-6 flex justify-center">
      <div className=" w-[95%] p-3">
        <h1 className="text-lg font-bold bg-primary text-white p-2 rounded-sm">
          {product}
        </h1>
        {arr ? (
          arr.map((product) => (
            <div
              className="flex items-center justify-between transition-all border-b-2 hover:bg-secondary"
              key={product.id}
            >
              <div className="p-3 w-[80%]">
                <h4 className="font-semibold">{product.name}</h4>
                <span className="font-semibold">{`R$ ${product.price}`}</span>
                <p className="text-xs">{product.description}</p>
              </div>
              <div className="px-5">
                <Heart size={20} />{' '}
              </div>
            </div>
          ))
        ) : (
          <h1>loading</h1>
        )}
      </div>
    </div>
  )
}

export default ProductsList
