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
          size: { width: "95%", height: "3rem" },
          fontSize: "1.1rem",
          border: "1px solid #000",
          margin: "0 auto",
        }}
        className="product-button"
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
  grid-gap: 0.5rem;
  padding: 1rem;
  border-radius: 1rem;
  background-color: #fff;
`;

const Li = styled.li`
  height: 4.5rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .product-button:hover {
    background-color: #006ba8;
    color: #fff;
    font-weight: 600;
  }

  .product-price {
    text-align: center;
    font-weight: 600;
  }
`;

export default ProductList;
