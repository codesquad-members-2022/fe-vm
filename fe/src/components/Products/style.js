import styled from 'styled-components';

export const Container = styled.div`
  width: 50%;
  height: 100%;
  margin: 0 auto;
`;

export const ProductsGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 12px;
  width: 100%;
  height: 100%;
`;

export const ProductCard = styled.div`
  width: 100%;
  height: 100px;
  border: 2px solid ${({ type, theme: { color } }) => decideBorderColor(type, color)};
  background-color: ${({ canBuy, isSelect, theme: { color } }) => {
    if (isSelect) {
      return color.pink;
    }
    return canBuy && color.lemon;
  }};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

export const MangementForm = styled.div`
  width: 100%;
  height: 100px;
  border: 1px solid black;
  margin-bottom: 8px;
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
