import React, { useEffect, useState } from "react";
import { getProducts } from "../services/services";

export default function StoreItems() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
      console.log(data); 
    });
  }, []);
}
