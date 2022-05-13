import React from 'react';
import PropTypes from 'prop-types';
import { StyledNavButton } from './NavButton.style';
import Button from 'components/atoms/Button/Button';

const NavButton = ({ unit, count, ...props }) => {
  return (
    <StyledNavButton borderType={'rounded'} flexType={'center'}>
      <Button sizeType={'medium'} colorType={'point'} children={'자판기'}></Button>
      <Button sizeType={'medium'} colorType={'disabled'} children={'지갑'}></Button>
    </StyledNavButton>
  );
};

NavButton.defaultProps = {
  borderType: 'rounded',
};

NavButton.propTypes = {
  borderType: PropTypes.string,
};

export default NavButton;
