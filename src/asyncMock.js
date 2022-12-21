const products = [
  {
    id: '1',
    name: 'Termo Stanley Rosa Original',
    price: 35000,
    category: 'termos',
    img: 'https://res.cloudinary.com/dmh74auqy/image/upload/v1671564475/BLACKSTANLEY/ROSA_vz2jbr.jpg',
    stock: 3,
    description: 'Termo Stanley Rosa (limestones) Original de 1lts. Mantiene Frio/Calor por mas de 30hs.'
  },
  {
    id: '2',
    name: 'Botella Stanley Azul Original',
    price: 15000,
    category: 'botellas',
    img: 'https://res.cloudinary.com/dmh74auqy/image/upload/v1671564474/BLACKSTANLEY/AZUL_nx0a9q.jpg',
    stock: 5,
    description: 'Botella Stanley Azul (lake) Original de 600ml. Perfecta para acompañarte día a día.'
  },

  {
    id: '3',
    name: 'Termo + Botella + Mate',
    price: 40000,
    category: 'combos',
    img: 'https://res.cloudinary.com/dmh74auqy/image/upload/v1671564476/BLACKSTANLEY/COMBO_ltuuhe.jpg',
    stock: 10,
    description: 'Combo perfecto para acompañarte día a día. Confia en Stanley y sus productos Termo ( color a eleccion ) + mas botella y mate. Aprovechalo!'
  },
]

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products)
    }, 500)
  })
}

export const getProductById = (id) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(products.find(prod => {
        return prod.id === id
      }))
    }, 500)
  })
}

export const getProductsByCategory = (categoryId) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(products.filter(prod => prod.category === categoryId))
    }, 500)
  })
}