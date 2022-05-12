import { useContext } from 'react';
import styled from 'styled-components';

import { parseMoneyFormat } from 'common/utils';
import COLORS from 'constants/colors';
import { LogContext } from 'context/LogProvider';
import { MoneyContext } from 'context/MoneyProvider';

const MoneyBox = ({ money: { amount, count } }) => {
  const [, setLogs] = useContext(LogContext);
  const { insertMoneyByClick } = useContext(MoneyContext);

  const isActive = count !== 0;

  const handleClickMoneyAmount = () => {
    insertMoneyByClick(count, amount);
    setLogs({
      type: 'insert',
      data: amount,
    });
  };

  return (
    <Wrapper>
      <MoneyAmount isActive={isActive} onClick={handleClickMoneyAmount}>
        {parseMoneyFormat(amount)}
      </MoneyAmount>
      <MoneyCount>{count}개</MoneyCount>
    </Wrapper>
  );
};

const Wrapper = styled.li`
  display: flex;
  justify-content: space-between;
`;

const BorderBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  margin: 0px 5px;
  border: 1px solid black;
  border-radius: 5px;
`;

const MoneyAmount = styled(BorderBox)`
  background-color: ${({ isActive }) =>
    isActive ? COLORS.MAIN_BG : COLORS.WHITE};
  ${({ isActive }) =>
    isActive &&
    `
      transition: all 0.2s;
      cursor: pointer;
      &:hover {
          background-color: ${COLORS.GREY};
          color: ${COLORS.WHITE};
      }
    `}
`;

const MoneyCount = styled(BorderBox)``;

export default MoneyBox;
