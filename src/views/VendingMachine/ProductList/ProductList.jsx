import Button from "components/form/Button/Button";
import products from "mockData/products";
import styled from "styled-components";

const { productsList } = products;

const ProductLi = ({ productsData }) => {
  return productsData.map((productData) => (
    <Li key={productData.id}>
      <Button
        data={productData}
        style={{
          size: { width: "90%", height: "2.5rem" },
          fontSize: "1.3rem",
          border: "1px solid",
          margin: "0 auto",
        }}
      />
      <p className="product-price">{productData.price}</p>
    </Li>
  ));
};

const ProductList = () => {
  const productsData = productsList;

  return (
    <ProductUl>
      <ProductLi productsData={productsData} />
    </ProductUl>
  );
};

const ProductUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
`;

const Li = styled.li`
  height: 4rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .product-price {
    text-align: center;
  }
`;

export default ProductList;
