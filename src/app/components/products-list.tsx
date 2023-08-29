import { IProducts } from '@/types/foods'
import { useState } from 'react'
import { AiFillHeart } from 'react-icons/ai'
import products from '@/data/products'
import SelectedItem from './selected-item'
import { useSelectedProductContext } from '@/hooks/useSelectFIlter'

interface ProductsListProps {
  product: string
  arr: IProducts[]
}

const ProductsList = ({ product, arr }: ProductsListProps) => {
  const { setSelectedProduct, selectedProduct } = useSelectedProductContext()
  const searchItem = (id: number) => {
    const item = products.find((prdt) => prdt.id === id)
    setSelectedProduct(item)
  }
  return (
    <div className="mt-6 flex justify-center">
      {selectedProduct && <SelectedItem product={selectedProduct} />}
      <div className=" w-[95%] p-3">
        <h1 className="text-lg font-bold bg-primary text-white p-2 rounded-sm">
          {product}
        </h1>
        {arr ? (
          arr.map((product) => (
            <div
              className="flex items-center justify-between transition-all cursor-pointer border-b-2 hover:bg-secondary"
              key={product.id}
              onClick={() => searchItem(product.id)}
            >
              <div className="p-3 w-[80%]">
                <h4 className="font-semibold">{product.name}</h4>
                <span className="font-semibold">{`R$ ${product.price}`}</span>
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
