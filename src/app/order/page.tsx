'use client'
import { OrderData, orderSchema } from '@/types/order-schema'
import { normalizeCPF, normalizePhoneNumber, normalizeCEP } from '@/utils/masks'
import axios from 'axios'
import { AiFillShopping, AiFillCreditCard } from 'react-icons/ai'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useCart } from '@/hooks/useCart'
import formattedPrice from '@/utils/formatPrice'
import { formatCPF, formatCartItems, formatComplement } from '@/utils/message'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { IProducts } from '@/types/products'

export default function Order() {
  const { updateLocalStorage } = useLocalStorage<IProducts[]>('products', [])
  const { cartItems, calculateTotal } = useCart()
  const [address, setAdress] = useState<any>(null)
  const [deliveryMethod, setDeliveryMethod] = useState<string>('delivery')
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<OrderData>({ resolver: zodResolver(orderSchema) })
  const phoneValue = watch('phone')
  const cpfValue = watch('cpf')
  const cepValue = watch('cep')

  useEffect(() => {
    setValue('deliveryMethod', deliveryMethod)
  }, [])

  useEffect(() => {
    setValue('phone', normalizePhoneNumber(phoneValue))
    setValue('cpf', normalizeCPF(cpfValue))
    setValue('cep', normalizeCEP(cepValue))
  }, [phoneValue, cpfValue, cepValue])

  async function getAddress() {
    if (cepValue !== ' ' && cepValue.length === 9) {
      const cep = cepValue.replace('-', '')
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
      const { logradouro, bairro, localidade, uf } = response.data
      setAdress(response)
      setValue('address', logradouro)
      setValue('district', bairro)
      setValue('city', localidade)
      setValue('uf', uf)
    }
  }
  const onSubmit = (data: OrderData) => {
    const message = `*Cliente*:
    Nome: *${data.name}*
    Celular: *${data.phone}*${formatCPF(data.cpf)}

    *Endereço*:
    ${data.address} 
    Cep: ${data.cep}
    Cidade: ${data.city}
    Número da casa: ${data.number}
    ${formatComplement(data.complement as string)}
    
    *Método de Entrega*:
    ${data.deliveryMethod === 'delivery' ? 'Delivery' : 'Retirar no Local'}
    
    *Pedido*:
    ${formatCartItems(cartItems)}
    
   *Valor Total*:
    ${formattedPrice(calculateTotal(cartItems))}
    
    *Forma de Pagamento*:
    ${data.paymentMethod}
    `

    const encodedMessage = encodeURIComponent(message)

    const phoneNumber = '5521990534416'

    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank')
    updateLocalStorage([])
    window.location.replace('/')
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full mx-auto max-w-lg md:max-w-7xl">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-2xl font-semibold mb-4">Informações do Pedido</h2>

        {/* Método de entrega */}
        <div className="mb-4">
          <span className="text-lg mb-2 block">Método de Entrega:</span>
          <label className="inline-flex items-center mr-4 cursor-pointer">
            <input
              {...register('deliveryMethod')}
              type="radio"
              className="form-radio text-primary cursor-pointer"
              value="delivery"
              checked={deliveryMethod === 'delivery' && true}
              onClick={() => setDeliveryMethod('delivery')}
            />
            <span className="ml-2">Delivery</span>
          </label>
          <label className="inline-flex items-center cursor-pointer">
            <input
              {...register('deliveryMethod')}
              type="radio"
              className="form-radio text-primary cursor-pointer"
              value="pickup"
              checked={deliveryMethod === 'pickup' && true}
              onClick={() => setDeliveryMethod('pickup')}
            />
            <span className="ml-2">Retirar no Local</span>
          </label>

          {deliveryMethod === 'pickup' && (
            <div>
              <span className="text-xs">
                Endereço: Av. Abílio Augusto Távora, 1111 - Luz, Nova Iguaçu -
                RJ, 26255-620
              </span>{' '}
            </div>
          )}
        </div>

        {/* Nome */}
        <div className="mb-4">
          <label className="block text-lg mb-2">Nome:</label>
          <input
            {...register('name')}
            type="text"
            className="form-input w-full px-3 py-2 rounded-md outline-none focus:outline-primary"
            placeholder="Digite seu nome"
          />
          {errors.name && (
            <span className="text-red-500 text-sm mt-1">
              Este campo é obrigatório
            </span>
          )}
        </div>

        {/* Celular */}
        <div className="mb-4">
          <label className="block text-lg mb-2">Celular:</label>
          <input
            {...register('phone')}
            type="tel"
            className="form-input w-full px-3 py-2 rounded-md outline-none focus:outline-primary"
            placeholder="Digite seu celular"
          />
          {errors.phone && (
            <span className="text-red-500 text-sm mt-1">
              Este campo é obrigatório
            </span>
          )}
        </div>

        {/* Cep */}
        <div className="mb-4">
          <label className="block text-lg mb-2">Cep:</label>
          <input
            {...register('cep')}
            type="tel"
            className="form-input w-full px-3 py-2 rounded-md outline-none focus:outline-primary"
            placeholder="Digite seu CEP"
            onBlur={getAddress}
          />
          {errors.cep && (
            <span className="text-red-500 text-sm mt-1">
              Este campo é obrigatório
            </span>
          )}
        </div>

        {/* Endereço */}
        <div className="mb-4">
          <label className="block text-lg mb-2">Endereço:</label>
          <input
            {...register('address')}
            type="text"
            className="form-input w-full px-3 py-2 rounded-md outline-none focus:outline-primary"
            placeholder="Digite seu endereço"
            value={address ? address.data.logradouro : ''}
          />
          {errors.address && (
            <span className="text-red-500 text-sm mt-1">
              Este campo é obrigatório
            </span>
          )}
        </div>

        {/* Número */}
        <div className="mb-4">
          <label className="block text-lg mb-2">Número:</label>
          <input
            {...register('number')}
            type="text"
            className="form-input w-full px-3 py-2 rounded-md outline-none focus:outline-primary"
            placeholder="Digite o número da residência"
          />
          {errors.number && (
            <span className="text-red-500 text-sm mt-1">
              Este campo é obrigatório
            </span>
          )}
        </div>

        {/* Complemento */}
        <div className="mb-4">
          <label className="block text-lg mb-2">Complemento:</label>
          <input
            {...register('complement')}
            type="text"
            className="form-input w-full px-3 py-2 rounded-md outline-none focus:outline-primary"
            placeholder="Digite o complemento (opcional)"
          />
        </div>

        {/* Bairro */}
        <div className="mb-4">
          <label className="block text-lg mb-2">Bairro:</label>
          <input
            {...register('district')}
            type="text"
            className="form-input w-full px-3 py-2 rounded-md outline-none focus:outline-primary"
            placeholder="Digite o bairro"
            value={address ? address.data.bairro : ''}
          />
          {errors.district && (
            <span className="text-red-500 text-sm mt-1">
              Este campo é obrigatório
            </span>
          )}
        </div>

        {/* Cidade */}
        <div className="mb-4">
          <label className="block text-lg mb-2">Cidade:</label>
          <input
            {...register('city')}
            type="text"
            className="form-input w-full px-3 py-2 rounded-md outline-none focus:outline-primary"
            placeholder="Digite a cidade"
            value={address ? address.data.localidade : ''}
          />
          {errors.city && (
            <span className="text-red-500 text-sm mt-1">
              Este campo é obrigatório
            </span>
          )}
        </div>

        {/* UF */}
        <div className="mb-4">
          <label className="block text-lg mb-2">UF:</label>
          <input
            {...register('uf')}
            type="text"
            className="form-input w-full px-3 py-2 rounded-md outline-none focus:outline-primary"
            placeholder="Digite a UF"
            value={address ? address.data.uf : ''}
          />
          {errors.uf && (
            <span className="text-red-500 text-sm mt-1">
              Este campo é obrigatório
            </span>
          )}
        </div>

        {/* CPF na Nota */}
        <div className="mb-4">
          <label className="block text-lg mb-2">CPF na Nota (opcional):</label>
          <input
            {...register('cpf')}
            type="text"
            className="form-input w-full px-3 py-2 rounded-md outline-none focus:outline-primary"
            placeholder="Digite seu CPF"
          />
        </div>
        <div className="bg-gray-200 p-3 rounded-md h-full">
          <div className="flex flex-col">
            <div className="flex items-center gap-1 ">
              <h1 className="flex items-center p-1 gap-1 font-medium text-lg ">
                Pedido <AiFillShopping />
              </h1>
            </div>
            <div className="bg-primary w-full h-[0.6px] rounded-sm" />
          </div>
          {cartItems.map((item) => (
            <div key={item.id} className="m-2 ">
              <h3 className="font-semibold">{item.name}</h3>
              {Object.keys(item.additional as any).length > 0 && (
                <div>
                  {Object.values(item.additional as any).map((add: any) => (
                    <div
                      key={add.name}
                      className="flex justify-between text-gray-600"
                    >
                      <p className="text-sm">
                        {add.quantity}x ADICIONAL ({add.name})
                      </p>
                    </div>
                  ))}
                </div>
              )}
              <div>
                <p>
                  {item.quantity} un x{' '}
                  {formattedPrice(item.price / item.quantity)} ={' '}
                  {formattedPrice(item.price)}
                </p>{' '}
              </div>
            </div>
          ))}
          <div className="bg-primary w-full h-[0.6px] rounded-sm" />
          <div className="my-1 flex flex-col">
            <span className="font-semibold m-1 text-sm ">
              {cartItems.length <= 0
                ? ''
                : `Total do pedido: ${formattedPrice(
                    calculateTotal(cartItems),
                  )}`}
            </span>
            <span className="font-semibold m-1 text-sm ">
              Taxa de entrega:{' '}
              {deliveryMethod === 'delivery'
                ? formattedPrice(3)
                : formattedPrice(0)}
            </span>
          </div>
          <div className="bg-primary w-full h-[0.6px] rounded-sm" />
          <div className="mt-1">
            <span className="font-semibold ml-1 text-l ">
              Total geral:{' '}
              {deliveryMethod === 'delivery'
                ? formattedPrice(calculateTotal(cartItems) + 3)
                : formattedPrice(calculateTotal(cartItems))}
            </span>
          </div>
        </div>
        {/* Método de pagamento */}
        <div className="bg-gray-200 p-3 rounded-md h-full mt-5">
          <div className="flex flex-col">
            <h1 className="flex items-center p-1 gap-1 font-medium text-lg">
              Método de pagamento <AiFillCreditCard />
            </h1>
            <div className="bg-primary w-full h-[0.6px] rounded-sm" />
            <div className="flex flex-col">
              <label className="items-center mr-4 my-1 cursor-pointer">
                <input
                  {...register('paymentMethod')}
                  type="radio"
                  className="form-radio text-primary cursor-pointer"
                  value="Dinheiro"
                />
                <span className="ml-2">Dinheiro</span>
              </label>
              <label className="items-center mr-4 my-1 cursor-pointer">
                <input
                  {...register('paymentMethod')}
                  type="radio"
                  className="form-radio text-primary cursor-pointer"
                  value="Cartão de crédito"
                />
                <span className="ml-2">Cartão de crédito</span>
              </label>
              <label className="items-center mr-4 my-1 cursor-pointer">
                <input
                  {...register('paymentMethod')}
                  type="radio"
                  className="form-radio text-primary cursor-pointer"
                  value="Cartão de débito"
                />
                <span className="ml-2">Cartão de débito</span>
              </label>
              <label className="items-center mr-4 my-1 cursor-pointer">
                <input
                  {...register('paymentMethod')}
                  type="radio"
                  className="form-radio text-primary cursor-pointer"
                  value="Pix"
                />
                <span className="ml-2">Pix</span>
              </label>
            </div>

            <div>
              <p className="text-sm p-2 font-semibold">
                Pagamento feito na entrega!
              </p>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="bg-primary w-full text-white rounded-lg py-1 transition-all mt-5 hover:bg-hover"
        >
          Finalizar pedido
        </button>
      </form>
    </div>
  )
}
