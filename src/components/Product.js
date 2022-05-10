import styled from "styled-components";

const ProductWrap = styled.div`
  width: calc(100% / 3.5);
  height: calc(100% / 4.2);
  margin-top: 1%;
  border-radius: 10px;
  border: 3px solid #fefefe;
`;
const Img = styled.img`
  width: 100%;
  height: 60%;
  border-radius: 10px;
`;
const Title = styled.div`
  width: 100%;
  margin-top: 6%;
  color: #fefefe;
  text-align: center;
`;
const Price = styled.div`
  width: 50%;
  color: #7093df;
  background-color: #fefefe;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 900;
  margin: 5% auto 5% auto;
`;

const Product = ({ product }) => {
  return (
    <ProductWrap>
      <Img src={product.imgURL} alt={product.title} />
      <Title>{product.title}</Title>
      <Price>{product.price}</Price>
    </ProductWrap>
  );
};

export default Product;
