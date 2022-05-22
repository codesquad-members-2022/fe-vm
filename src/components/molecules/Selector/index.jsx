import React, { useContext, useState } from 'react';
import Icon from 'components/atoms/Icon';
import * as Styled from 'components/molecules/Selector/Selector.style';
import mockData from 'components/molecules/Selector//SelectMockData';
import ListItem from 'components/atoms/ListItem';
import Button from 'components/atoms/Button';
import { WalletContext } from 'context/Wallet';
import { LogContext } from 'context/Log';
import { calcInsertedMoney } from 'context/Wallet/reducer';

const Selector = ({ initTitle = 'Select', listData = mockData, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState({ unit: initTitle });
  const { state, walletDispatch, insertMoney } = useContext(WalletContext);
  const { addLog, LOG_TYPE, logDispatch } = useContext(LogContext);

  const ListItemStyle = {
    flexType: 'centerRight',
    sizeType: 'short',
    fontType: 'large',
  };

  const buttonStyle = {
    sizeType: 'small',
    colorType: 'point',
    fontType: 'medium',
  };

  const toggleIsOpen = () => setIsOpen(prevState => !prevState);

  const clickItem = value => () => {
    setSelectedValue(value);
    toggleIsOpen();
  };

  const handleOnClick = () => {
    const insertValue = selectedValue.value;
    const { walletData } = state;
    const { usedMoneyData, usedSumOfMoney } = calcInsertedMoney(walletData, insertValue);

    if (!usedMoneyData[insertValue]) {
      addLog(logDispatch, LOG_TYPE.ERROR);
      return;
    }

    insertMoney(walletDispatch, { usedMoneyData, usedSumOfMoney });
    addLog(logDispatch, LOG_TYPE.INPUT, usedSumOfMoney);
  };

  return (
    <Styled.SelectorWrapper>
      <Styled.Selector>
        <Styled.SelectBox flexType="centerBetween" borderType="default" onClick={toggleIsOpen}>
          <Icon iconName={isOpen ? 'caretUp' : 'caretDown'} />
          <Styled.SelectTitle>{selectedValue.unit}</Styled.SelectTitle>
        </Styled.SelectBox>
        {isOpen && (
          <Styled.SelectList>
            {state?.walletData.map(
              selectedData =>
                selectedData.count > 0 && (
                  <ListItem key={selectedData.id} onClick={clickItem(selectedData)} {...ListItemStyle}>
                    {selectedData.unit}
                  </ListItem>
                )
            )}
          </Styled.SelectList>
        )}
      </Styled.Selector>
      <Button onClick={handleOnClick} {...buttonStyle}>
        추가
      </Button>
    </Styled.SelectorWrapper>
  );
};

export default Selector;
