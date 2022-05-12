import styled from 'styled-components';

const ProductBtn = styled.button`
  position: relative;
  width: 100px;
  height: 100px;
  text-align: center;
  &:disabled {
    cursor: default;
  }
`;

const Detail = styled.span`
  display: block;
  font-size: 50px;
  letter-spacing: -20px;
  text-indent: -20px;
  opacity: ${({ quantity }) => (quantity > 0 ? 1 : 0.3)};
`;

const Price = styled.span`
  display: block;
  margin-top: 15px;
`;

export { ProductBtn, Detail, Price };
