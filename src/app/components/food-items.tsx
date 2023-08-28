import Image from 'next/image'
import hamburguer from '../../assets/hamburguer.png'
import fries from '../../assets/fries.png'
import soda from '../../assets/refri.png'
import beers from '../../assets/beers.png'
import portions from '../../assets/portion.png'
import combo from '../../assets/combo.png'

const FoodItems = () => {
  return (
    <div className="flex gap-8 justify-center items-center w-full flex-wrap text-primary ">
      <div className="flex flex-col items-center px-8 py-5 h-[160px] justify-center hover:outline outline-1 rounded-md outline-primary">
        <Image src={hamburguer} alt="hamburger" className="w-[90px] h-[90px]" />
        <h3>Hamburguers</h3>
      </div>
      <div className="flex flex-col items-center px-8 py-5 h-[160px] justify-center hover:outline outline-1 rounded-md outline-primary ">
        <Image src={fries} alt="hamburger" className="w-[90px] h-[90px" />
        <h3>Batata frita</h3>
      </div>
      <div className="flex flex-col items-center px-8 py-5 h-[160px] justify-center hover:outline outline-1 rounded-md outline-primary">
        <Image src={soda} alt="hamburger" className="w-[90px] h-[90px" />
        <h3>Refrigerantes</h3>
      </div>
      <div className="flex flex-col items-center px-8 py-5 h-[160px] justify-center hover:outline outline-1 rounded-md outline-primary">
        <Image src={beers} alt="hamburger" className="w-[90px] h-[90px" />
        <h3>Cervejas</h3>
      </div>
      <div className="flex flex-col items-center px-8 py-5 h-[160px] justify-center hover:outline outline-1 rounded-md outline-primary">
        <Image src={portions} alt="hamburger" className="w-[90px] h-[90px" />
        <h3>Porções</h3>
      </div>
      <div className="flex flex-col items-center px-8 py-5 h-[160px] justify-center hover:outline outline-1 rounded-md outline-primary">
        <Image src={combo} alt="hamburger" className="w-[90px] h-[90px" />
        <h3>Combos</h3>
      </div>
    </div>
  )
}

export default FoodItems
