import { Heart } from 'lucide-react'
const FoodList = () => {
  return (
    <div className="mt-6 flex justify-center">
      <div className=" w-[90%] p-3">
        <h1 className="text-lg font-bold bg-blue-400 p-2">BURGUER</h1>
        <div className=" flex items-center">
          <div className="p-3">
            <h4 className="font-semibold">Hamburgao</h4>
            <span className="font-semibold">R$ 3,50</span>
            <p className="text-xs">
              Esse hamburgeu é muito muito muito gostoso e tbm é bem barto e
              entrega no confrto da sua casa
            </p>
          </div>
          <Heart />
        </div>
        <div className=" flex items-center">
          <div className="p-3">
            <h4 className="font-semibold">Hamburgao</h4>
            <span className="font-semibold">R$ 3,50</span>
            <p className="text-xs">
              Esse hamburgeu é muito muito muito gostoso e tbm é bem barto e
              entrega no confrto da sua casa
            </p>
          </div>
          <Heart />
        </div>
        <div className=" flex items-center">
          <div className="p-3">
            <h4 className="font-semibold">Hamburgao</h4>
            <span className="font-semibold">R$ 3,50</span>
            <p className="text-xs">
              Esse hamburgeu é muito muito muito gostoso e tbm é bem barto e
              entrega no confrto da sua casa
            </p>
          </div>
          <Heart />
        </div>
      </div>
    </div>
  )
}

export default FoodList
