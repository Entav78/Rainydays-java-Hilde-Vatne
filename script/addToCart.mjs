// 1. User clicks the button
// 2. Get the cart from local storage:
//    1. If it exists, return it
//    2. If not, create one and add the item
// 3. Update local storage

export function addToCart(jacket) {
  const cart = localStorage.getItem("cart");
  if (cart === null) {
    const newCart = [];
    newCart.push(jacket);
    localStorage.setItem("cart", JSON.stringify(newCart));
  } else {
    const newCart = JSON.parse(cart);
    newCart.push(jacket);
    localStorage.setItem("cart", JSON.stringify(newCart));
  }
}




export function getCartTotal() {
  let totalCost = 0;
  const cart = localStorage.getItem("cart");
  if (cart !== null) {
    const newCart = JSON.parse(cart);
    for (let i = 0; i < newCart.length; i++) {
      totalCost = totalCost + newCart[i].price;
    }
  }
  return totalCost;
}
