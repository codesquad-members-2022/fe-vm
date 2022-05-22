import styled from 'styled-components';

const StyledProduct = styled.div`
  width: 70px;
  height: 70px;
  border: ${props => (props.buyable ? '2px solid #c5fff8' : '1px solid black')};
  background-color: ${props => (props.soldOut ? '#e2e2e2' : '')};
  text-align: center;

  button {
    background: none;
    border: none;
    font-size: 30px;
    margin: 5px;
  }
`;

export default StyledProduct;
