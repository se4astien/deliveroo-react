// 1. Nous identifions un état products qui va contenir les produits du PANIER
let products = [
  {
    id: "88",
    name: "Brunch",
    price: 25,
    quantity: 1
  },
  {
    id: "90",
    name: "Granola",
    price: 20,
    quantity: 3
  }
];

// 2. Je pourrais utiliser cette fonction à chaque fois que je souhaite ajouter un produit à mon panier
const addProduct = product => {
  // 6. On fait une copie du tableau
  const newProducts = [...products];
  // 4. On vérifie si le produit existe ou non dans le panier
  let isFound = false;

  // 3. Si le produit a déjà été ajouté dans le panier
  for (let i = 0; i < products.length; i++) {
    // SI l'id est le même
    if (products[i].id === product.id) {
      // On ajoute 1 à la quantité
      products[i].quantity = products[i].quantity + 1;
      // Le produit correspond bien à celui du panier
      isFound = true;
    }
  }

  // 4. Si le produit n'a pas été trouvé dans le panier
  if (isFound === false) {
    // On l'ajoute avec une quantité étal à 1
    product.quantity = 1;
    products.push(product);
  }

  products = newProducts;
  // 7. Dans React, il faudra mettre à jour l'état (setProducts(newProducts))
  // setProducts(newProducts);
};

addProduct({ id: "10", name: "Baguette", price: 2 });
addProduct({ id: "20", name: "Quiche", price: 4 });
addProduct({ id: "20", name: "Quiche", price: 4 });

// console.log(products);

// 5. Fonction remove()
const removeProduct = product => {
  const newProducts = [...products];
  for (let i = 0; i < products.length; i++) {
    if (newProducts[i].id === product.id) {
      newProducts[i].quantity = newProducts[i].quantity - 1;
      if (products[i].quantity === 0) {
        // Pour retirer un élément du tableau
        products.splice(i, 1);
      }
      break; // Pour ne pas chercher partout dans le tableau une fois qu'on a trouvé
    }
  }

  products = newProducts;
  // 7. Dans React, il faudra mettre à jour l'état (setProducts(newProducts))
  // setProducts(newProducts);
};

removeProduct({ id: "10", name: "Baguette", price: 2 });
removeProduct({ id: "20", name: "Quiche", price: 4 });
removeProduct({ id: "20", name: "Quiche", price: 4 });

console.log(products);

// 8. Fonction calculateTotal
const calculTotal = () => {
  let total = 0;

  for (let i = 0; i < products.length; i++) {
    total = total + products[i].price * products[i].quantity;
  }
  return total;
};
console.log(calculTotal());
