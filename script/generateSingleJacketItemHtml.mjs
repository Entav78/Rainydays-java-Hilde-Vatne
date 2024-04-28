import { addToCart } from "./cart.mjs";

export function generateSingleJacketItemHTML(jacket) {
  const jacketContainer = document.createElement("div");

  const jacketTitle = document.createElement("h2");
  jacketTitle.textContent = jacket.title;

  const jacketPrice = document.createElement("p");
  jacketPrice.textContent = jacket.price;

  const jacketAddToCartButton = document.createElement("button");
  jacketAddToCartButton.addEventListener("click", function () {
    addToCart(jacket);
  });
  jacketAddToCartButton.textContent = "Add to cart";

  jacketContainer.append(jacketTitle, jacketPrice, jacketAddToCartButton);
  return jacketContainer;
}
