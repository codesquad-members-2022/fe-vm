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
  border: 2px solid
    ${({ type, theme: { color } }) => {
      const borderColorType = {
        drink: color.orange,
        snack: color.mint,
      };
      return borderColorType[type];
    }};
  background-color: ${({ canBuy, isSelect, theme: { color } }) => {
    if (isSelect) {
      return color.pink;
    }
    if (canBuy) {
      return color.blue;
    }
    return color.white;
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
