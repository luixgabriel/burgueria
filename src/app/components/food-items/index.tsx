'use client'
import Image from 'next/image'
import hamburguer from '../../../assets/hamburguer.png'
import fries from '../../../assets/fries.png'
import soda from '../../../assets/refri.png'
import beers from '../../../assets/beers.png'
import portions from '../../../assets/portion.png'
import combo from '../../../assets/combo.png'
import { useFilterFoodContext } from '@/hooks/useFoodFilter'
import { FoodsType } from '@/types/food-enums'

const FoodItems = () => {
  const { setFood } = useFilterFoodContext()
  const handleUpdateFood = (value: FoodsType) => {
    setFood(value)
  }
  return (
    <div className="flex gap-8 justify-center items-center w-full flex-wrap text-primary ">
      <div className="flex flex-col items-center px-8 py-5 h-[160px] justify-center hover:outline outline-1 rounded-md outline-primary cursor-pointer">
        <Image
          src={hamburguer}
          alt="hamburger"
          className="w-[90px] h-[90px]"
          onClick={() => handleUpdateFood(FoodsType.hamburguer)}
        />
        <h3>Hamburguers</h3>
      </div>
      <div className="flex flex-col items-center px-8 py-5 h-[160px] justify-center hover:outline outline-1 rounded-md outline-primary cursor-pointer">
        <Image
          src={fries}
          alt="fries"
          className="w-[90px] h-[90px]"
          onClick={() => handleUpdateFood(FoodsType.fries)}
        />
        <h3>Batatas</h3>
      </div>
      <div className="flex flex-col items-center px-8 py-5 h-[160px] justify-center hover:outline outline-1 rounded-md outline-primary cursor-pointer">
        <Image
          src={soda}
          alt="soda"
          className="w-[90px] h-[90px]"
          onClick={() => handleUpdateFood(FoodsType.soda)}
        />
        <h3>Refrigerantes</h3>
      </div>
      <div className="flex flex-col items-center px-8 py-5 h-[160px] justify-center hover:outline outline-1 rounded-md outline-primary cursor-pointer">
        <Image
          src={beers}
          alt="beers"
          className="w-[90px] h-[90px]"
          onClick={() => handleUpdateFood(FoodsType.beers)}
        />
        <h3>Cervejas</h3>
      </div>
      <div className="flex flex-col items-center px-8 py-5 h-[160px] justify-center hover:outline outline-1 rounded-md outline-primary cursor-pointer">
        <Image
          src={portions}
          alt="portions"
          className="w-[90px]"
          onClick={() => handleUpdateFood(FoodsType.portions)}
        />
        <h3>Porções</h3>
      </div>
      <div className="flex flex-col items-center px-8 py-5 h-[160px] justify-center hover:outline outline-1 rounded-md outline-primary cursor-pointer">
        <Image
          src={combo}
          alt="combos"
          className="w-[90px] h-[90px]"
          onClick={() => handleUpdateFood(FoodsType.combos)}
        />
        <h3>Combos</h3>
      </div>
    </div>
  )
}

export default FoodItems
