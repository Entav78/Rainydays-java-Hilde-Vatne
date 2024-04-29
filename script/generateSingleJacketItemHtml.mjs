//import { addToCart } from "./cart.mjs";

export function generateSingleJacketItemHTML(jacket) {
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

  const jacketAddToCartButton = document.createElement("button");
  console.log("appending elements");
  jacketAddToCartButton.addEventListener("click", function () {
    addToCart(jacket);
  });
  jacketAddToCartButton.textContent = "Add to cart";

  jacketContainer.append(jacketTitle, jacketImage, jacketPrice, jacketAddToCartButton);
  return jacketContainer;
}console.log("function end");
