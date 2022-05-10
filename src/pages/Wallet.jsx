import { useState, useEffect } from 'react';
import styled from 'styled-components';

import COLORS from 'constants/colors';
import moneyData from 'mocks/moneyData';

const Wrapper = styled.li`
  display: flex;
  justify-content: space-between;
`;

const MoneyWrapper = ({ money: { amount, count } }) => (
  <Wrapper>
    <MoneyBox>{amount}원</MoneyBox>
    <MoneyBox>{count}개</MoneyBox>
  </Wrapper>
);

const MoneyList = ({ moneyList }) =>
  moneyList?.map((money) => <MoneyWrapper key={money.id} money={money} />);

const Wallet = () => {
  const [money, setMoney] = useState();

  const totalMoney = money?.reduce(
    (sum, { amount, count }) => sum + amount * count,
    0
  );

  useEffect(() => {
    setMoney(moneyData);
  }, []);

  return (
    <WalletLayout>
      <MoneyList moneyList={money} />
      <TotalPrice>{totalMoney}원</TotalPrice>
    </WalletLayout>
  );
};

const WalletLayout = styled.div`
  display: grid;
  grid-gap: 10px;
  flex-direction: column;
  width: 300px;
  height: 500px;
  padding: 30px;
  background-color: ${COLORS.WHITE};
  border: 0.5rem solid ${COLORS.DARK_GREY};
`;

const BorderBox = styled.div`
  border: 1px solid black;
`;

const TotalPrice = styled(BorderBox)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;

const MoneyBox = styled(BorderBox)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  margin: 0px 5px;
`;

export default Wallet;
