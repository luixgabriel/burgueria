import burguerList from '@/data/burguers'
import { Heart } from 'lucide-react'
const FoodList = () => {
  return (
    <div className="mt-6 flex justify-center">
      <div className=" w-[95%] p-3">
        <h1 className="text-lg font-bold bg-blue-400 p-2 rounded-sm">
          BURGUER
        </h1>
        {burguerList.map((burger) => (
          <div className=" flex items-center justify-between" key={burger.id}>
            <div className="p-3 w-[80%]">
              <h4 className="font-semibold">{burger.name}</h4>
              <span className="font-semibold">{`R$ ${burger.price}`}</span>
              <p className="text-xs">{burger.description}</p>
            </div>
            <Heart size={20} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default FoodList
