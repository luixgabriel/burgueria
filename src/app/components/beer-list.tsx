import beersList from '@/data/beers'
import { Heart } from 'lucide-react'
const BeerList = () => {
  return (
    <div className="mt-6 flex justify-center">
      <div className=" w-[95%] p-3">
        <h1 className="text-lg font-bold bg-primary text-white p-2 rounded-sm">
          CERVEJAS
        </h1>
        {beersList.map((beer) => (
          <div
            className=" flex items-center justify-between border-b-2"
            key={beer.id}
          >
            <div className="p-3 w-[80%]">
              <h4 className="font-semibold">{beer.name}</h4>
              <span className="font-semibold">{`R$ ${beer.price}`}</span>
              <p className="text-xs">{beer.description}</p>
            </div>
            <Heart size={20} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default BeerList
