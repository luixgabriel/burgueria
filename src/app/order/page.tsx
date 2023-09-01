'use client'
import { normalizeCPF, normalizePhoneNumber, normalizeCEP } from '@/utils/masks'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

export default function Order() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm()

  const phoneValue = watch('phone')
  const cpfValue = watch('cpf')
  const cepValue = watch('cep')

  useEffect(() => {
    setValue('phone', normalizePhoneNumber(phoneValue))
    setValue('cpf', normalizeCPF(cpfValue))
    setValue('cep', normalizeCEP(cepValue))
  }, [phoneValue, cpfValue, cepValue])

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg mx-auto mt-10">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-2xl font-semibold mb-4">Informações do Pedido</h2>

        {/* Método de entrega */}
        <div className="mb-4">
          <span className="text-lg mb-2 block">Método de Entrega:</span>
          <label className="inline-flex items-center mr-4">
            <input
              {...register('deliveryMethod')}
              type="radio"
              className="form-radio text-primary"
              value="delivery"
            />
            <span className="ml-2">Delivery</span>
          </label>
          <label className="inline-flex items-center">
            <input
              {...register('deliveryMethod')}
              type="radio"
              className="form-radio text-primary"
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
            className="form-input w-full px-3 py-2 rounded-md"
            placeholder="Digite seu nome"
          />
        </div>

        {/* Cep */}
        <div className="mb-4">
          <label className="block text-lg mb-2">Cep:</label>
          <input
            {...register('cep')}
            type="tel"
            className="form-input w-full px-3 py-2 rounded-md"
            placeholder="Digite seu CEP"
          />
        </div>

        {/* Celular */}
        <div className="mb-4">
          <label className="block text-lg mb-2">Celular:</label>
          <input
            {...register('phone')}
            type="tel"
            className="form-input w-full px-3 py-2 rounded-md"
            placeholder="Digite seu celular"
          />
        </div>

        {/* Endereço */}
        <div className="mb-4">
          <label className="block text-lg mb-2">Endereço:</label>
          <input
            {...register('address')}
            type="text"
            className="form-input w-full px-3 py-2 rounded-md"
            placeholder="Digite seu endereço"
          />
        </div>

        {/* Número */}
        <div className="mb-4">
          <label className="block text-lg mb-2">Número:</label>
          <input
            {...register('number')}
            type="text"
            className="form-input w-full px-3 py-2 rounded-md"
            placeholder="Digite o número da residência"
          />
        </div>

        {/* Complemento */}
        <div className="mb-4">
          <label className="block text-lg mb-2">Complemento:</label>
          <input
            {...register('complement')}
            type="text"
            className="form-input w-full px-3 py-2 rounded-md"
            placeholder="Digite o complemento (opcional)"
          />
        </div>

        {/* Bairro */}
        <div className="mb-4">
          <label className="block text-lg mb-2">Bairro:</label>
          <input
            {...register('district')}
            type="text"
            className="form-input w-full px-3 py-2 rounded-md"
            placeholder="Digite o bairro"
          />
        </div>

        {/* Cidade */}
        <div className="mb-4">
          <label className="block text-lg mb-2">Cidade:</label>
          <input
            {...register('city')}
            type="text"
            className="form-input w-full px-3 py-2 rounded-md"
            placeholder="Digite a cidade"
          />
        </div>

        {/* UF */}
        <div className="mb-4">
          <label className="block text-lg mb-2">UF:</label>
          <select
            {...register('uf')}
            className="form-select w-full px-3 py-2 rounded-md"
          >
            <option value="">Selecione o estado</option>
            <option value="SP">SP</option>
            <option value="RJ">RJ</option>
            <option value="MG">MG</option>
            {/* ... Outros estados aqui ... */}
          </select>
        </div>

        {/* CPF na Nota */}
        <div className="mb-4">
          <label className="block text-lg mb-2">CPF na Nota (opcional):</label>
          <input
            {...register('cpf')}
            type="text"
            className="form-input w-full px-3 py-2 rounded-md"
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
