import friesList from '@/data/fries'
import { Heart } from 'lucide-react'
const FriesList = () => {
  return (
    <div className="mt-6 flex justify-center">
      <div className=" w-[95%] p-3">
        <h1 className="text-lg font-bold bg-primary text-white p-2 rounded-sm">
          BATATAS
        </h1>
        {friesList.map((fries) => (
          <div
            className="flex items-center justify-between transition-all border-b-2 hover:bg-secondary"
            key={fries.id}
          >
            <div className="p-3 w-[80%]">
              <h4 className="font-semibold">{fries.name}</h4>
              <span className="font-semibold">{`R$ ${fries.price}`}</span>
              <p className="text-xs">{fries.description}</p>
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

export default FriesList
