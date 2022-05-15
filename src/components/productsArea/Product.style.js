import styled from 'styled-components';

const ProductBtn = styled.button`
  position: relative;
  width: 100px;
  height: 100px;
  padding: 10px 0 5px;
  text-align: center;
  background: linear-gradient(to bottom left, #d6f1fc, #ffffff, #daf2fc);
  border-radius: 5px;
  &:disabled {
    cursor: default;
    & span:first-child {
      transform: scale(1);
    }
    & span {
      opacity: ${({ disabled }) => (disabled ? 0.3 : 1)};
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
  margin-top: 10px;
`;

export { ProductBtn, Detail, Price };
