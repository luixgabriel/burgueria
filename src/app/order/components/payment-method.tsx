import { OrderData, orderSchema } from '@/types/order-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'

const PaymentMethod = () => {
  const { register } = useForm<OrderData>({
    resolver: zodResolver(orderSchema),
  })

  return (
    <>
      <div className="flex flex-col">
        <label className="items-center mr-4 my-1 cursor-pointer">
          <input
            {...register('paymentMethod')}
            type="radio"
            className="form-radio text-primary cursor-pointer"
            value="delivery"
          />
          <span className="ml-2">Dinheiro</span>
        </label>
        <label className="items-center mr-4 my-1 cursor-pointer">
          <input
            {...register('paymentMethod')}
            type="radio"
            className="form-radio text-primary cursor-pointer"
            value="delivery"
          />
          <span className="ml-2">Cartão de crédito</span>
        </label>
        <label className="items-center mr-4 my-1 cursor-pointer">
          <input
            {...register('paymentMethod')}
            type="radio"
            className="form-radio text-primary cursor-pointer"
            value="delivery"
          />
          <span className="ml-2">Cartão de débito</span>
        </label>
        <label className="items-center mr-4 my-1 cursor-pointer">
          <input
            {...register('paymentMethod')}
            type="radio"
            className="form-radio text-primary cursor-pointer"
            value="delivery"
          />
          <span className="ml-2">Pix</span>
        </label>
      </div>

      <div>
        <p className="text-sm p-2 font-semibold">Pagamento feito na entrega!</p>
      </div>
    </>
  )
}

export default PaymentMethod
