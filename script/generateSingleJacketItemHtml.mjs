
import { addToCartButton } from "./cart/addToCartButtonHtml.mjs";
import { toShoppingCartButton } from './cart/toShoppingCartButton.mjs';


export function generateSingleJacketItemHtml(jacket) {
  const jacketContainer = document.createElement("div");

  const jacketImage = document.createElement("img");
  jacketImage.src = jacket.image;
  jacketImage.alt = `${jacket.title} image`;

  const jacketTitle = document.createElement("h2");
  jacketTitle.textContent = jacket.title;

  const jacketDescription = document.createElement("p");
  jacketDescription.textContent = jacket.description;

  const jacketPrice = document.createElement("p");
  if (jacket.onSale) {
    jacketPrice.innerHTML = `Regular Price: <strike>${jacket.price}</strike> Sale Price: ${jacket.discountedPrice}`;
  } else {
    jacketPrice.textContent = `Price: ${jacket.price}`;
  }

  const jacketColor = document.createElement("p");
  jacketColor.textContent = jacket.baseColor;

  const jacketSize = document.createElement("button");
  jacketSize.textContent = jacket.sizes;

  const addToCartBtn = addToCartButton(jacket);
  const toShoppingCartBtn = toShoppingCartButton("button");

  jacketContainer.append( jacketImage, jacketTitle, jacketDescription, jacketColor, jacketSize, jacketPrice, addToCartBtn, toShoppingCartBtn);

  return jacketContainer;
}
