import { useContext } from "react";

import MoneyItem from "components/Wallet/MoneyItem/MoneyItem";
import TotalMoneyArea from "components/Wallet/TotalMoneyArea/TotalMoneyArea";
import { MoneyContext, setMoneyContext } from "pages/Layout/Layout";

import Wrapper from "./Wallet.styled";

const Wallet = () => {
  const { cashData } = useContext(MoneyContext);
  const handleClickButton = useContext(setMoneyContext);

  const walletItems = cashData.map(({ money }, idx) => {
    return (
      // NOTE: 여기서 context의 value를 해당 MoneyItem에 해당하는 것으로 지정하여
      // 리렌더링을 막아보려 했으나 onClick이벤트에 의해서 전체가 리렌더링 되게 됨🤔
      <MoneyContext.Provider value={cashData[idx]} key={money}>
        <MoneyItem onClick={() => handleClickButton(idx)} />
      </MoneyContext.Provider>
    );
  });

  return (
    <Wrapper>
      <ul>{walletItems}</ul>
      <TotalMoneyArea moneyData={cashData} />
    </Wrapper>
  );
};

export default Wallet;
