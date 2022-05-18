import styled from 'styled-components';

function BalanceReturnBtn() {
  return (
    <Img src={process.env.PUBLIC_URL + '/img/balance-return.png'} alt="동전 반환" />
  );
}

const Img = styled.img`
  position: absolute;
  top: 500px;
  right: 320px;
`;

export default BalanceReturnBtn;
