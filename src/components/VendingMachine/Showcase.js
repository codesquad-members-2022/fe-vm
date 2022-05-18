import { useState, useEffect } from "react";
import styled from "styled-components";
import Product from "./Product";

export default function Showcase() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("data/products.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const data = await response.json();
      setProducts(data);
    }
    fetchData();
  }, []);

  return (
    <ShowcaseWrapper>
      {products.map((product) => (
        <Product key={product.id} item={product} />
      ))}
    </ShowcaseWrapper>
  );
}

const ShowcaseWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;
