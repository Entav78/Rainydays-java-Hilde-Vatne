

import { addToCartButton } from './cart/addToCartButtonHtml.mjs';
import { toShoppingCartButton } from './cart/toShoppingCartButton.mjs';

export function generateSingleJacketHtml(jacket) {
  const jacketListItem = document.createElement("div");
  jacketListItem.classList.add("jacketProduct");
  const jacketLink = document.createElement("a");
  jacketLink.href = `https://entav78.github.io/Rainydays-java-Hilde-Vatne/html/product/index?id=${jacket.id}`; 

  const jacketImage = document.createElement("img");
  jacketImage.src = jacket.image;

  const jacketTitle = document.createElement("h2");
  jacketTitle.textContent = jacket.title;

  jacketLink.append(jacketImage, jacketTitle);

  const jacketPrice = document.createElement("p");
  if (jacket.onSale) {
    jacketPrice.innerHTML = `Regular Price: <strike>${jacket.price}</strike> Sale Price: ${jacket.discountedPrice}`;
  } else {
    jacketPrice.textContent = `Price: ${jacket.price}`;
  }

  const addToCartBtn = addToCartButton(jacket);
  const redirectToShoppingCartBtn = toShoppingCartButton("button");

  jacketListItem.append(jacketLink, jacketPrice, addToCartBtn, redirectToShoppingCartBtn);

  return jacketListItem;
}
