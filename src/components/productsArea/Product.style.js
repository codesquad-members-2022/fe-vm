import styled from 'styled-components';

const ProductBtn = styled.button`
  position: relative;
  width: 100px;
  height: 100px;
  text-align: center;
  opacity: ${({ quantity }) => (quantity > 0 ? 1 : 0.3)};
  &:disabled {
    cursor: default;
    & span:first-child:hover {
      transform: scale(1);
    }
    & span:last-child {
      text-decoration: line-through;
    }
  }
`;

const Detail = styled.span`
  display: block;
  font-size: 50px;
  letter-spacing: -20px;
  text-indent: -20px;
  &:hover {
    transform: scale(1.15);
    transition: transform 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
`;

const Price = styled.span`
  display: block;
  margin-top: 15px;
`;

export { ProductBtn, Detail, Price };
