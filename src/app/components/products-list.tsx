import { useFavorite } from '@/hooks/useFavorite'
import { IProducts } from '@/types/products'
import formattedPrice from '@/utils/formatPrice'
import { useRouter } from 'next/navigation'
import { AiFillHeart } from 'react-icons/ai'

interface ProductsListProps {
  product: string
  arr: IProducts[]
}

const ProductsList = ({ product, arr }: ProductsListProps) => {
  const router = useRouter()
  const { setFavProducts, handleFavoriteProduct } = useFavorite()
  const handleNavigate = (id: number) => {
    router.push(`/product?id=${id}`)
  }
  return (
    <div className="mt-6 flex justify-center">
      <div className=" w-[95%] p-3">
        <h1 className="text-lg font-bold bg-primary text-white p-2 rounded-sm">
          {product}
        </h1>
        {arr ? (
          arr.map((product) => (
            <div
              className="flex items-center justify-between transition-all cursor-pointer border-b-2 hover:bg-secondary"
              key={product.id}
            >
              <div
                className="p-3 w-[80%]"
                onClick={() => handleNavigate(product.id)}
              >
                <h4 className="font-semibold">{product.name}</h4>
                <span className="font-semibold">
                  {formattedPrice(product.price)}
                </span>
                <p className="text-xs">{product.description}</p>
              </div>
              <div className="px-5">
                <AiFillHeart
                  size={25}
                  style={{
                    cursor: 'pointer',
                    transition: 'color 0.1s',
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.color = 'red')}
                  onMouseOut={(e) => (e.currentTarget.style.color = 'black')}
                  onClick={() => handleFavoriteProduct(product)}
                />
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
