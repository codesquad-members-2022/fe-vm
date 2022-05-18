import React, { useState } from 'react';
import Icon from 'components/atoms/Icon/Icon';
import * as Styled from './Selector.style';
import mockData from './SelectMockData';
import ListItem from 'components/atoms/ListItem/ListItem';

const Selector = ({ initTitle = 'Select', listData = mockData, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState({ title: initTitle });
  const toggleIsOpen = () => setIsOpen(prevState => !prevState);

  const clickItem = value => () => {
    setSelectedValue(value);
    toggleIsOpen();
  };

  const ListItemStyle = {
    flexType: 'centerRight',
    sizeType: 'short',
    fontType: 'large',
  };

  return (
    <Styled.Selector>
      <Styled.SelectBox flexType="centerBetween" borderType="default" onClick={toggleIsOpen}>
        <Icon iconName={isOpen ? 'caretUp' : 'caretDown'} />
        <Styled.SelectTitle>{selectedValue.title}</Styled.SelectTitle>
      </Styled.SelectBox>
      {isOpen && (
        <Styled.SelectList>
          {listData.map(selectedData => (
            <ListItem key={selectedData.id} onClick={clickItem(selectedData)} {...ListItemStyle}>
              {selectedData.title}
            </ListItem>
          ))}
        </Styled.SelectList>
      )}
    </Styled.Selector>
  );
};

export default Selector;
