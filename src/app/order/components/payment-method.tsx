import { PaymentData, paymentSchema } from '@/types/payment-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'

const PaymentMethod = () => {
  const { register, handleSubmit, watch } = useForm<PaymentData>({
    resolver: zodResolver(paymentSchema),
  })
  const selectedPaymentMethod = watch('paymentMethod')

  const onSubmit = (data: PaymentData) => {
    console.log('chemi')
    console.log(data)
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
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
      </form>
      <div>
        <p className="text-sm p-2 font-semibold">Pagamento feito na entrega!</p>
      </div>
    </>
  )
}

export default PaymentMethod
