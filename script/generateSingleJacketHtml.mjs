import { addToCartButton } from './addToCartButtonHtml.mjs';

export function generateSingleJacketHtml(jacket) {
  
  const jacketListItem = document.createElement("div");
  jacketListItem.classList.add("jacketProduct");

  const jacketLink = document.createElement("a");
  jacketLink.href = `/jacket/productPage.html?id=${jacket.id}`;

  //Create image
  const jacketImage = document.createElement("img");
  jacketImage.src = `${jacket.image}`;

  //Title h2
  const jacketTitle = document.createElement("h2");
  jacketTitle.textContent = `${jacket.title}`;

  //Price
  const jacketPrice = document.createElement("p");
  jacketPrice.textContent = `${jacket.price}`;

  if (jacket.onSale) {
    // If the item is on sale, display both prices
    jacketPrice.innerHTML = `Regular Price: <strike>${jacket.price}</strike> Sale Price: ${jacket.discountedPrice}`;
  } else {
    // Otherwise, just display the regular price
    jacketPrice.textContent = `Price: ${jacket.price}`;
  }

  const addToCartBtn = addToCartButton(jacket);

  //Color
  const jacketColor = document.createElement("p");
  jacketColor.textContent = `${jacket.baseColor}`;

  //Size
  const jacketSize = document.createElement("p");
  jacketSize.textContent = `${jacket.sizes}`;

  // Append image and title
 /* jacketLink.appendChild(jacketImage);
  jacketLink.appendChild(jacketTitle);
  jacketLink.appendChild(jacketPrice);
  jacketLink.appendChild(jacketColor);
  jacketLink.appendChild(jacketSize);
  jacketLink.appendChild(addToCartBtn);

*/  

  jacketLink.append(jacketImage, jacketTitle, jacketPrice, jacketColor, jacketSize, addToCartBtn);
  
  jacketListItem.appendChild(jacketLink);
  // Return the HTML we created
  return jacketListItem;
}
