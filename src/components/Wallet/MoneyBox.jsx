import { useContext } from 'react';
import styled from 'styled-components';

import { parseMoneyFormat } from 'common/utils';
import COLORS from 'constants/colors';
import { LogContext } from 'context/LogProvider';
import { MoneyContext } from 'context/MoneyProvider';
import createHoverCss from 'styles/createHoverCss';

const MoneyBox = ({ money: { amount, count } }) => {
  const [, setLogs] = useContext(LogContext);
  const { insertMoneyByClick } = useContext(MoneyContext);

  const isActive = count !== 0;
  const hoverCss = createHoverCss({
    bgColor: {
      base: isActive ? COLORS.MAIN_BG : COLORS.WHITE,
      hover: COLORS.GREY,
    },
    textColor: {
      base: COLORS.BLACK,
      hover: COLORS.WHITE,
    },
  });

  const handleClickMoneyAmount = () => {
    insertMoneyByClick(count, amount);
    setLogs({
      type: 'insert',
      data: amount,
    });
  };

  return (
    <Wrapper>
      <MoneyAmount
        isActive={isActive}
        onClick={handleClickMoneyAmount}
        hoverCss={hoverCss}
      >
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
  ${({ isActive, hoverCss }) =>
    isActive &&
    `
      cursor: pointer;
      ${hoverCss}
    `}
`;

const MoneyCount = styled(BorderBox)``;

export default MoneyBox;
