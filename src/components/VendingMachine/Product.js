import styled from "styled-components";
import { useContext } from "react";
import { LogContext } from "../../contexts/Log";
import { InputAmountContext } from "../../contexts/InputAmount";

export default function Product({ item }) {
  const { emoji, name, price } = item;
  const { log } = useContext(LogContext);
  const { inputAmount, subtractInputAmount } = useContext(InputAmountContext);
  function selectProduct() {
    subtractInputAmount(price);
    log("select", name);
  }
  return (
    <ProductWrapper>
      <Emoji>{emoji}</Emoji>
      <Price disabled={price > inputAmount} onClick={selectProduct}>
        {price}
      </Price>
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
const Price = styled.button`
  box-sizing: content-box;

  width: 60px;
  padding: 2px 10px;
  border: none;
  border-radius: 999px;
  background-color: ${({ theme }) => theme.colors.orange};
  text-align: center;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.white};
  :disabled {
    background-color: ${({ theme }) => theme.colors.gray3};
  }
`;
