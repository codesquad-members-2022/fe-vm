import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from 'components/atoms/Label/Label.style';

const Label = ({ flexType, sizeType, fontType, borderType, children, ...props }) => {
  return (
    <Styled.Label flexType={flexType} sizeType={sizeType} fontType={fontType} borderType={borderType} props={props}>
      {children}
    </Styled.Label>
  );
};

Label.defaultProps = {
  flexType: 'center',
  sizeType: 'small',
  fontType: 'medium',
  borderType: 'rounded',
  children: '500 개',
};

Label.propTypes = {
  flexType: PropTypes.string,
  sizeType: PropTypes.string,
  fontType: PropTypes.string,
  borderType: PropTypes.string,
  children: PropTypes.node,
};

export default Label;
