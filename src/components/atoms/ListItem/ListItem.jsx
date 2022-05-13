import React from 'react';
import PropTypes from 'prop-types';
import StyledListItem from './ListItem.style';

const ListItem = ({ flexType, sizeType, fontType, borderType, children, ...props }) => {
  return (
    <StyledListItem flexType={flexType} sizeType={sizeType} fontType={fontType} borderType={borderType} props={props}>
      {children}
    </StyledListItem>
  );
};

ListItem.defaultProps = {
  flexType: 'leftCenter',
  sizeType: 'long',
  fontType: 'medium',
  children: '1000원을 투입했습니다!',
};

ListItem.propTypes = {
  flexType: PropTypes.string,
  sizeType: PropTypes.string,
  fontType: PropTypes.string,
  borderType: PropTypes.string,
  children: PropTypes.node,
};

export default ListItem;
