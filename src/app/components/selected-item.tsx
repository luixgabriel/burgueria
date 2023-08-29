const SelectedItem = ({ product }: any) => {
  return (
    <div className="bg-green-600 absolute inset-0 flex justify-center items-center z-50">
      {product && (
        <div className="  h-screen flex flex-col p-3">
          <h1 className=" text-lg font-bold m-4">{product.name}</h1>
          <div className="flex flex-col gap-2">
            <h4>{product.name}</h4>
            <p>{product.description}</p>
            <span>{product.price}</span>
          </div>
          <div className="flex flex-col">
            <h1 className="font-semibold self-center">Complemento</h1>
            {product.additional.map((add) => (
              <div key={add.id} className="flex flex-col justify-start m-3">
                <p>{`ADICIONAL (${add.name})`}</p>
                <span>+ R$ {add.price}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default SelectedItem
