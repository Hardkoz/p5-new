
const convertProductArrayToObject = (productIds) => {
  const cartWithQuantity = {}
  productIds.forEach(productId => {
    if (cartWithQuantity[productId]) {
      cartWithQuantity[productId] += 1
    } else {
      cartWithQuantity[productId] = 1
    }
  })
  return cartWithQuantity
}

const getProduct(productId) {
  // Fetch
  return product
}

const displayItemInCarts = () => {
  const cart = JSON.parse(localStorage.getItem('cart'));

  const cartWithQuantity = convertProductArrayToObject(cart)
  Object.keys(cartWithQuantity).forEach(productId => {
    getProduct(productId)
  })
  
  // forEach sur chaque clef de l'objet :
  // - fetch du serveur le produit
  // - Créer une ligne avec l'image du produit, son prix, son prix x quantité
  // - Ajouter la ligne dans le DOM
  // Calcule le prix total
}

displayItemInCarts()