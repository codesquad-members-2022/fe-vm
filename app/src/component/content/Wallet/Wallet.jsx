import { useContext } from 'react';
import { MoneyContext } from '../../../index';
import Table from '../../styled-component/Table';


const MONEY_TABLE_HEADER = {
  UNIT: '단위',
  COUNT: '개수',
};

function Wallet() {
  const { money } = useContext(MoneyContext);
  const moneyArr = Object.entries(money);

  return (
    <Table>
      <thead>
        <tr>
          <th>{MONEY_TABLE_HEADER.UNIT}</th>
          <th>{MONEY_TABLE_HEADER.COUNT}</th>
        </tr>
      </thead>
      <tbody>
        {moneyArr.map(([unit, count]) => (
          <tr key={unit}>
            <td>{unit}원</td>
            <td>
              <input type="number" value={count} />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default Wallet;
