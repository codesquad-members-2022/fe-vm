import styled from 'styled-components';

export const ProductsContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 12px;
  width: 50%;
  margin: 0 auto;
`;

export const ProductCard = styled.div`
  width: 100%;
  height: 100%;
  border: 2px solid ${({ type, theme: { color } }) => decideBorderColor(type, color)};
  background-color: ${({ canBuy, theme: { color } }) => canBuy && color.lemon};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const decideBorderColor = (type, color) => {
  switch (type) {
    case 'drink':
      return color.orange;
    case 'snack':
      return color.mint;
    default:
      return 'black';
  }
};
