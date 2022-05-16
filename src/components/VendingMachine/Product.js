import styled from "styled-components";

export default function Product({ item }) {
  const { emoji, price } = item;
  return (
    <ProductWrapper>
      <Emoji>{emoji}</Emoji>
      <Price>{price}</Price>
    </ProductWrapper>
  );
}

const ProductWrapper = styled.div`
  padding: 20px;
`;
const Emoji = styled.div`
  padding: 10px 0;
  text-align: center;
  font-size: 45px;
`;
const Price = styled.div`
  width: 60px;
  padding: 4px 10px 2px 10px;
  border-radius: 999px;
  background-color: ${({ theme }) => theme.colors.gray3};
  text-align: center;

  color: ${({ theme }) => theme.colors.white};
`;
