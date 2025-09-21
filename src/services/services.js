import { setLocalStorage, getLocalStorage } from "../utils/storageUtils";

export function getProducts() {
  const cached = getLocalStorage("products");
  if (cached) return Promise.resolve(cached);

  return fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => {
      setLocalStorage("products", data);
      return data;
    });
}
