async function getProducts() {
  return fetch("https://api.escuelajs.co/api/v1/products")
    .then((response) => response.json())
    .then((products) => products)
    .catch((err) => err);
}

export { getProducts };
