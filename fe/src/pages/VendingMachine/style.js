import styled from 'styled-components';

export const VMContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 36px;
`;

export const ProductsContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 12px;
  width: 50%;
  margin: 0 auto;
`;

export const InsertMoneyFormContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
`;

export const InsertMoneyFormBox = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #222;
  input {
    border: none;
    text-align: right;
    &:focus {
      outline: none;
    }
  }
`;

export const ProductCard = styled.div`
  width: 100%;
  height: 100%;
  border: 2px solid ${({ type }) => decideBorderColor(type)};
  background-color: ${({ canBuy }) => canBuy && '#C4E538'};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const decideBorderColor = type => {
  switch (type) {
    case 'drink':
      return 'tomato';
    case 'snack':
      return 'darkGreen';
    default:
      return 'black';
  }
};
