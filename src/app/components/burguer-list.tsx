'use client'
import burguerList from '@/data/burguers'
import { useFilterFoodContext } from '@/hooks/useFoodFilter'
import { FoodsType } from '@/types/food-enums'
import { Heart } from 'lucide-react'
const BurguerList = () => {
  const { food } = useFilterFoodContext()

  if (food === FoodsType.HAMBURGER) {
    return (
      <div className="mt-6 flex justify-center">
        <div className=" w-[95%] p-3">
          <h1 className="text-lg font-bold bg-primary text-white p-2 rounded-sm">
            BURGUER
          </h1>
          {burguerList.map((burger) => (
            <div
              className="flex items-center justify-between transition-all border-b-2 hover:bg-secondary"
              key={burger.id}
            >
              <div className="p-3 w-[80%]">
                <h4 className="font-semibold">{burger.name}</h4>
                <span className="font-semibold">{`R$ ${burger.price}`}</span>
                <p className="text-xs">{burger.description}</p>
              </div>
              <div className="px-5">
                <Heart size={20} />{' '}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default BurguerList
