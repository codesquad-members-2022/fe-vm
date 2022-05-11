import { useEffect } from "react";
import products from "../../data/products";
import Product from "./Product";

export default function Showcase() {
  return (
    <div>
      {products.map((product) => (
        <Product key={product.id} item={product} />
      ))}
    </div>
  );
}
