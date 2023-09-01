'use client'
import { OrderData, orderSchema } from '@/types/order-schema'
import { normalizeCPF, normalizePhoneNumber, normalizeCEP } from '@/utils/masks'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

export default function Order() {
  const [address, setAdress] = useState<any>(null)
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
    setValue('phone', normalizePhoneNumber(phoneValue))
    setValue('cpf', normalizeCPF(cpfValue))
    setValue('cep', normalizeCEP(cepValue))
  }, [phoneValue, cpfValue, cepValue])

  useEffect(() => {
    async function FetchCep() {
      const myHouse = await axios.get('https://viacep.com.br/ws/26275150/json/')
      console.log(myHouse)
    }

    FetchCep()
  }, [])

  async function getAddress() {
    if (cepValue !== ' ' && cepValue.length === 9) {
      const cep = cepValue.replace('-', '')
      const addressInput = await axios.get(
        `https://viacep.com.br/ws/${cep}/json/`,
      )
      console.log(addressInput)
      setAdress(addressInput)
    }
  }

  const onSubmit = (data: OrderData) => {
    console.log(data)
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg mx-auto mt-10">
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
            />
            <span className="ml-2">Delivery</span>
          </label>
          <label className="inline-flex items-center cursor-pointer">
            <input
              {...register('deliveryMethod')}
              type="radio"
              className="form-radio text-primary cursor-pointer"
              value="pickup"
            />
            <span className="ml-2">Retirar no Local</span>
          </label>
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

        {/* Botão de enviar */}
        <div className="mt-6">
          <button
            type="submit"
            className="bg-primary text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  )
}
