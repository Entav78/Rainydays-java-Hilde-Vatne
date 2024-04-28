

export function generateSingleJacketHtml(jacket) {
  console.log(jacket);
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

  //Color
  const jacketColor = document.createElement("p");
  jacketColor.textContent = `${jacket.baseColor}`;

  //Size
  const jacketSize = document.createElement("p");
  jacketSize.textContent = `${jacket.sizes}`;

  // Append image and title
  jacketLink.appendChild(jacketImage);
  jacketLink.appendChild(jacketTitle);
  jacketLink.appendChild(jacketPrice);
  jacketLink.appendChild(jacketColor);
  jacketLink.appendChild(jacketSize);

  jacketListItem.appendChild(jacketLink);
  // Return the HTML we created
  return jacketListItem;
}