import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'components/atoms/Icon/Icon';
import { StyledSelectList, StyledSelectTitle } from './SelectList.style';

const SelectList = ({ title, ...props }) => {
  return (
    <StyledSelectList flexType="centerBetween" borderType="rounded">
      <Icon iconName="caretDown"></Icon>
      <StyledSelectTitle>Select</StyledSelectTitle>
    </StyledSelectList>
  );
};

SelectList.defaultProps = {};

SelectList.propTypes = {};

export default SelectList;
