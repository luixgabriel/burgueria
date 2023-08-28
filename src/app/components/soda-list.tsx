import sodaList from '@/data/soda'
import { Heart } from 'lucide-react'
const SodaList = () => {
  return (
    <div className="mt-6 flex justify-center">
      <div className=" w-[95%] p-3">
        <h1 className="text-lg font-bold bg-primary text-white p-2 rounded-sm">
          REFRIGERANTES
        </h1>
        {sodaList.map((soda) => (
          <div
            className=" flex items-center justify-between border-b-2"
            key={soda.id}
          >
            <div className="p-3 w-[80%]">
              <h4 className="font-semibold">{soda.name}</h4>
              <span className="font-semibold">{`R$ ${soda.price}`}</span>
              <p className="text-xs">{soda.description}</p>
            </div>
            <Heart size={20} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default SodaList
