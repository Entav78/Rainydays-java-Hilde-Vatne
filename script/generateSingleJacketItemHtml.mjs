/*import { addToCart } from "./addToCart.mjs";
import { addToCartButton } from "./addToCartButtonHtml.mjs";
import { redirectToCheckout } from "./redirectToCheckout.mjs";

export function generateSingleJacketItemHtml(jacket) {
  const jacketContainer = document.createElement("div");

  // Create the jacket image
  const jacketImage = document.createElement("img");
  jacketImage.src = jacket.image; // Assuming 'jacket.image' contains a valid URL or path to an image
  jacketImage.alt = `${jacket.title} image`; // Optional but recommended for accessibility
console.log(jacketImage);

  const jacketTitle = document.createElement("h2");
  jacketTitle.textContent = jacket.title;

  const jacketPrice = document.createElement("p");
  jacketPrice.textContent = jacket.price;

  console.log("function start");
  if (jacket.onSale) {
    console.log("jacket is on sale");
    // If the item is on sale, display both the regular and discounted price
    jacketPrice.innerHTML = `Regular Price: <strike>${jacket.price}</strike> Sale Price: ${jacket.discountedPrice}`;
  } else {
    console.log("jacket is not on sale");
    // Otherwise, just display the regular price
    jacketPrice.textContent = `Price: ${jacket.price}`;
  } 

  /*const jacketAddToCartButton = document.createElement("button");
  console.log("appending elements");
  jacketAddToCartButton.addEventListener("click", function () {
    addToCart(jacket);
  });*/
/*
  const addToCartBtn = addToCartButton(jacket);

  const redirectToCheckoutBtn = redirectToCheckout();

  jacketContainer.append(jacketTitle, jacketImage, jacketPrice, addToCartBtn, goToCartBtn, redirectToCheckoutBtn);
  return jacketContainer;
}console.log("function end");

*/

//import { addToCart } from "./addToCart.mjs";
import { addToCartButton } from "./addToCartButtonHtml.mjs";
import { toShoppingCartButton } from './toShoppingCartButton.mjs';


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
