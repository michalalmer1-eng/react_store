// StoreItems.jsx
import React, { useEffect, useState } from "react";
import { getProducts } from "./productsService";

export default function StoreItems() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const data = getProducts();
    setProducts(data);
  }, []);

  console.log(products);

  return null; 
}
