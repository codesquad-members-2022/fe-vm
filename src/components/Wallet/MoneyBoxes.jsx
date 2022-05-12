import MoneyBox from 'components/Wallet/MoneyBox';

const MoneyBoxes = ({ moneyData, updateMoney }) =>
  moneyData?.map((money) => (
    <MoneyBox key={money.id} money={money} updateMoney={updateMoney} />
  ));

export default MoneyBoxes;
