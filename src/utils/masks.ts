export const normalizeCPF = (value: string | undefined) => {
  if (!value) return ''

  return value
    .replace(/\D/g, '') // remove qualquer caractere não numérico
    .replace(/(\d{3})(\d)/, '$1.$2') // insere o primeiro ponto depois de 3 dígitos
    .replace(/(\d{3})(\d)/, '$1.$2') // insere o segundo ponto depois de 3 dígitos
    .replace(/(\d{3})(\d{1,2})/, '$1-$2') // insere o traço depois de 3 dígitos
    .replace(/(-\d{2})\d+?$/, '$1') // captura apenas 2 dígitos após o traço
}

export const normalizePhoneNumber = (value: string | undefined) => {
  if (!value) return ''

  return value
    .replace(/[\D]/g, '')
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .replace(/(-\d{4})(\d+?)/, '$1')
}

export const normalizeCEP = (value: string | undefined) => {
  if (!value) return ''

  return value
    .replace(/\D/g, '')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .replace(/(-\d{3})\d+?$/, '$1')
}
