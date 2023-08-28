interface IBurguer {
  id: number
  name: string
  price: string
  description: string
}

const burguerList: IBurguer[] = [
  {
    id: 1,
    name: 'Clássico',
    price: '10,00',
    description: 'Hambúrguer de carne, alface, tomate e molho especial.',
  },
  {
    id: 2,
    name: 'Bacon Deluxe',
    price: '15,00',
    description:
      'Hambúrguer de carne, bacon crocante, queijo cheddar, alface e molho barbecue.',
  },
  {
    id: 3,
    name: 'Veggie',
    price: '12,00',
    description:
      'Hambúrguer vegetariano, alface, tomate, cebola roxa e molho tártaro.',
  },
  {
    id: 4,
    name: 'Frango Crocante',
    price: '13,00',
    description: 'Hambúrguer de frango empanado, alface, maionese e picles.',
  },
  {
    id: 5,
    name: 'Picanha Premium',
    price: '18,00',
    description:
      'Hambúrguer de picanha, queijo muçarela, bacon, cebolas caramelizadas e molho de mostarda e mel.',
  },
  {
    id: 6,
    name: 'Fish Burger',
    price: '14,00',
    description: 'Hambúrguer de peixe, alface, tomate e molho tártaro.',
  },
  {
    id: 7,
    name: 'Triple Meat',
    price: '20,00',
    description:
      'Três hambúrgueres de carne, queijo cheddar, bacon, alface, tomate e molho especial.',
  },
]

export default burguerList
