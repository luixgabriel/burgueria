import { FoodsType } from '@/types/food-enums'
import { IProducts } from '@/types/foods'

const products: IProducts[] = [
  {
    id: 1,
    name: 'Clássico',
    price: '10,00',
    category: FoodsType.hamburguer,
    description: 'Hambúrguer de carne, alface, tomate e molho especial.',
  },
  {
    id: 2,
    name: 'Bacon Deluxe',
    price: '15,00',
    category: FoodsType.hamburguer,
    description:
      'Hambúrguer de carne, bacon crocante, queijo cheddar, alface e molho barbecue.',
  },
  {
    id: 3,
    name: 'Veggie',
    price: '12,00',
    category: FoodsType.hamburguer,
    description:
      'Hambúrguer vegetariano, alface, tomate, cebola roxa e molho tártaro.',
  },
  {
    id: 4,
    name: 'Frango Crocante',
    price: '13,00',
    category: FoodsType.hamburguer,
    description: 'Hambúrguer de frango empanado, alface, maionese e picles.',
  },
  {
    id: 5,
    name: 'Picanha Premium',
    price: '18,00',
    category: FoodsType.hamburguer,
    description:
      'Hambúrguer de picanha, queijo muçarela, bacon, cebolas caramelizadas e molho de mostarda e mel.',
  },
  {
    id: 6,
    name: 'Fish Burger',
    price: '14,00',
    category: FoodsType.hamburguer,
    description: 'Hambúrguer de peixe, alface, tomate e molho tártaro.',
  },
  {
    id: 7,
    name: 'Triple Meat',
    price: '20,00',
    category: FoodsType.hamburguer,
    description:
      'Três hambúrgueres de carne, queijo cheddar, bacon, alface, tomate e molho especial.',
  },
  {
    id: 8,
    name: 'Batata Tradicional',
    price: '5,00',
    category: FoodsType.fries,
    description: 'Porção de batatas fritas crocantes e salgadas.',
  },
  {
    id: 9,
    name: 'Batata com Queijo e Bacon',
    price: '7,50',
    category: FoodsType.fries,
    description:
      'Batatas fritas cobertas com queijo derretido e pedaços de bacon crocante.',
  },
  {
    id: 10,
    name: 'Batata Especiada',
    price: '6,00',
    category: FoodsType.fries,
    description: 'Batatas fritas com um mix de especiarias e ervas.',
  },
  {
    id: 11,
    name: 'Batata com Cheddar',
    price: '6,50',
    category: FoodsType.fries,
    description: 'Batatas fritas cobertas com molho de cheddar cremoso.',
  },
  {
    id: 12,
    name: 'Batata Doce Frita',
    price: '6,50',
    category: FoodsType.fries,
    description: 'Porção de batatas doces fritas, levemente salgadas.',
  },
  {
    id: 13,
    name: 'Coca-Cola',
    category: FoodsType.soda,
    price: '3,50',
    description: 'Refrigerante clássico de cola.',
  },
  {
    id: 14,
    name: 'Guaraná Antarctica',
    price: '3,50',
    category: FoodsType.soda,
    description: 'Refrigerante tradicional de guaraná.',
  },
  {
    id: 15,
    name: 'Fanta Laranja',
    price: '3,40',
    category: FoodsType.soda,
    description: 'Refrigerante sabor laranja.',
  },
  {
    id: 16,
    name: 'Kuat',
    price: '3,40',
    category: FoodsType.soda,
    description: 'Refrigerante de guaraná refrescante.',
  },
  {
    id: 17,
    name: 'H2OH!',
    price: '3,00',
    category: FoodsType.soda,
    description: 'Bebida gaseificada leve saborizada.',
  },
  {
    id: 18,
    name: 'Skol',
    price: '4,50',
    category: FoodsType.beers,
    description: 'Cerveja pilsen, leve e refrescante.',
  },
  {
    id: 19,
    name: 'Brahma',
    price: '4,50',
    category: FoodsType.beers,
    description: 'Cerveja pilsen tradicional com sabor marcante.',
  },
  {
    id: 20,
    name: 'Antarctica',
    price: '4,40',
    category: FoodsType.beers,
    description: 'Cerveja pilsen de sabor suave.',
  },
  {
    id: 21,
    name: 'Heineken',
    price: '6,50',
    category: FoodsType.beers,
    description:
      'Cerveja premium de origem holandesa com sabor característico.',
  },
  {
    id: 22,
    name: 'Stella Artois',
    price: '6,70',
    category: FoodsType.beers,
    description: 'Cerveja belga premium, leve e sofisticada.',
  },
  {
    id: 23,
    name: 'Bohemia',
    price: '5,00',
    category: FoodsType.beers,
    description: 'Cerveja pilsen brasileira com sabor encorpado e tradição.',
  },
  {
    id: 24,
    name: 'Nuggets',
    price: '10,00',
    category: FoodsType.portions,
    description: 'Porção de nuggets crocantes, servidos com molho à escolha.',
  },
  {
    id: 25,
    name: 'Calabresa Acebolada',
    price: '12,50',
    category: FoodsType.portions,
    description:
      'Porção de calabresa fatiada e frita, acompanhada de cebolas douradas.',
  },
  {
    id: 26,
    name: 'Mandioca Frita',
    price: '9,00',
    category: FoodsType.portions,
    description: 'Mandioca cortada em palitos e frita até ficar dourada.',
  },
  {
    id: 27,
    name: 'Queijo à Milanesa',
    price: '11,00',
    category: FoodsType.portions,
    description:
      'Porção de queijo empanado e frito, crocante por fora e derretido por dentro.',
  },
  {
    id: 28,
    name: 'Isca de Frango',
    price: '10,50',
    category: FoodsType.portions,
    description:
      'Tiras de frango empanadas e fritas, servidas com molho à escolha.',
  },
  {
    id: 29,
    name: 'Combo Clássico',
    price: '18,00',
    category: FoodsType.combos,
    description:
      'Hambúrguer clássico, porção média de batatas fritas e refrigerante de 300ml.',
  },
  {
    id: 30,
    name: 'Combo Vegetariano',
    price: '20,00',
    category: FoodsType.combos,
    description:
      'Hambúrguer vegetariano, porção média de batatas fritas e refrigerante de 300ml.',
  },
  {
    id: 31,
    name: 'Combo Frango',
    price: '19,00',
    category: FoodsType.combos,
    description:
      'Hambúrguer de frango, porção média de batatas fritas e refrigerante de 300ml.',
  },
  {
    id: 32,
    name: 'Combo Duplo',
    price: '22,00',
    category: FoodsType.combos,
    description:
      'Hambúrguer duplo, porção grande de batatas fritas e refrigerante de 500ml.',
  },
]

export default products
