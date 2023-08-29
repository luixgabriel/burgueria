const SelectedItem = ({ product }: any) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center z-50">
      {product && (
        <div className=" bg-white h-screen flex flex-col items-center p-3">
          <h1 className=" text-lg font-bold m-4">{product.name}</h1>
          <div className="flex flex-col gap-2">
            <h4>{product.name}</h4>
            <p>{product.description}</p>
            <span>{product.price}</span>
          </div>
          <div className="flex">
            <h1>Complementos</h1>
          </div>
        </div>
      )}
    </div>
  )
}

export default SelectedItem
