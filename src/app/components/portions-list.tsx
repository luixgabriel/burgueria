import portionsList from '@/data/portions'
import { Heart } from 'lucide-react'
const PortionsList = () => {
  return (
    <div className="mt-6 flex justify-center">
      <div className=" w-[95%] p-3">
        <h1 className="text-lg font-bold bg-primary text-white p-2 rounded-sm">
          PORÇÕES
        </h1>
        {portionsList.map((portion) => (
          <div
            className="flex items-center justify-between transition-all border-b-2 hover:bg-secondary"
            key={portion.id}
          >
            <div className="p-3 w-[80%]">
              <h4 className="font-semibold">{portion.name}</h4>
              <span className="font-semibold">{`R$ ${portion.price}`}</span>
              <p className="text-xs">{portion.description}</p>
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

export default PortionsList
