

import { addToCartButton } from './addToCartButtonHtml.mjs';
import { toShoppingCartButton } from './toShoppingCartButton.mjs';

export function generateSingleJacketHtml(jacket) {
  const jacketListItem = document.createElement("div");
  jacketListItem.classList.add("jacketProduct");

  // Create the link
  const jacketLink = document.createElement("a");
  jacketLink.href = `/jacket/productPage.html?id=${jacket.id}`;

  const jacketImage = document.createElement("img");
  jacketImage.src = jacket.image;

  const jacketTitle = document.createElement("h2");
  jacketTitle.textContent = jacket.title;

  // Append the image and title to the link
  jacketLink.append(jacketImage, jacketTitle);

  // Create other details separately
  const jacketPrice = document.createElement("p");
  if (jacket.onSale) {
    jacketPrice.innerHTML = `Regular Price: <strike>${jacket.price}</strike> Sale Price: ${jacket.discountedPrice}`;
  } else {
    jacketPrice.textContent = `Price: ${jacket.price}`;
  }

  

  const addToCartBtn = addToCartButton(jacket);
  const redirectToShoppingCartBtn = toShoppingCartButton("button");

  // Append all details to the jacketListItem
  jacketListItem.append(jacketLink, jacketPrice, addToCartBtn, redirectToShoppingCartBtn);

  return jacketListItem;
}
