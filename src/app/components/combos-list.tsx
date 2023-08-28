import combosList from '@/data/combos'
import { Heart } from 'lucide-react'
const CombosList = () => {
  return (
    <div className="mt-6 flex justify-center">
      <div className=" w-[95%] p-3">
        <h1 className="text-lg font-bold bg-primary text-white p-2 rounded-sm">
          COMBOS
        </h1>
        {combosList.map((combos) => (
          <div
            className=" flex items-center justify-between border-b-2"
            key={combos.id}
          >
            <div className="p-3 w-[80%]">
              <h4 className="font-semibold">{combos.name}</h4>
              <span className="font-semibold">{`R$ ${combos.price}`}</span>
              <p className="text-xs">{combos.description}</p>
            </div>
            <Heart size={20} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default CombosList
