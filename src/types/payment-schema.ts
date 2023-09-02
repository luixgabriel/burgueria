import { z } from 'zod'

export const paymentSchema = z.object({
  paymentMethod: z.string().nonempty('Campo obrigatório'),
})

export type PaymentData = z.infer<typeof paymentSchema>
