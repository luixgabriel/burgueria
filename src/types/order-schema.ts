import { z } from 'zod'

export const orderSchema = z.object({
  deliveryMethod: z.string().nonempty('Campo obrigatório'),
  name: z.string().nonempty('Campo obrigatório'),
  cep: z.string().nonempty('Campo obrigatório'),
  phone: z.string().nonempty('Campo obrigatório'),
  address: z.string().nonempty('Campo obrigatório'),
  number: z.string().nonempty('Campo obrigatório'),
  complement: z.string().optional(),
  district: z.string().nonempty('Campo obrigatório'),
  city: z.string().nonempty('Campo obrigatório'),
  uf: z.string().nonempty('Campo obrigatório'),
  cpf: z.string().nonempty('Campo obrigatório'),
})

export type OrderData = z.infer<typeof orderSchema>
