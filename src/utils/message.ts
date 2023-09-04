import { IAdditional, IProducts } from '@/types/products'
import formattedPrice from './formatPrice'

const formatAdditionals = (additional: IAdditional[] | null) => {
  return Object.values(additional as IAdditional[])
    .map(
      (add) =>
        `• ${add.quantity}x ${add.name} - R$${formattedPrice(
          add.price * add.quantity,
        )}`,
    )
    .join('\n')
}

const formatCartItems = (cartItems: IProducts[]) => {
  return cartItems
    .map((item) => {
      let formattedItem = `• ${item.quantity}x ${item.name} - ${formattedPrice(
        item.price,
      )}`
      if (item.observation) {
        formattedItem += formatObservation(item.observation)
      }
      if (item.additional && Object.keys(item.additional).length > 0) {
        formattedItem += `\n    *Adicionais*: ${formatAdditionals(
          item.additional,
        )}`
      }
      return formattedItem
    })
    .join('\n')
}

const formatObservation = (data: string | null): string => {
  return data ? `\n    *Observações*: ${data}` : ''
}

const formatCPF = (data: string | null): string => {
  return data ? `\n    *CPF na Nota*: ${data}` : ''
}

const formatComplement = (data: string | null): string => {
  return data ? `\n    *Complemento*: ${data}` : ''
}

export {
  formatAdditionals,
  formatCartItems,
  formatObservation,
  formatCPF,
  formatComplement,
}
