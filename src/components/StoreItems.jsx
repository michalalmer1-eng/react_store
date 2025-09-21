import React, { useEffect, useState } from "react";
import { getProducts } from "../services/services";

export default function StoreItems() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
      {products.map((product) => (
        <div
          key={product.id}
          style={{
            width: "23%", // בערך 4 כרטיסים בשורה
            border: "1px solid #ddd",
            borderRadius: "5px",
            padding: "8px",
            textAlign: "center",
            boxSizing: "border-box",
          }}
        >
          <img
            src={product.image}
            alt={product.title}
            style={{ width: "100%", height: "100px", objectFit: "contain" }}
          />
          <h4 style={{ fontSize: "14px", margin: "5px 0" }}>{product.title}</h4>
          <p style={{ margin: 0, fontWeight: "bold" }}>${product.price}</p>
        </div>
      ))}
    </div>
  );
}
