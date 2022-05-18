import React from 'react';
import PropTypes from 'prop-types';
import { StyledVM, ProductWrapper } from './VendingMachine.style';
import ProductBox from 'components/molecules/ProductBox/ProductBox';
import Logo from 'components/molecules/Logo/Logo';
import mockData from 'components/organisms/VendingMachine/ProductMockData';

const VendingMachine = ({ title, ...props }) => {
  return (
    <StyledVM flexType="center">
      <ProductWrapper flexType="center">
        {mockData.map(({ name, icon, cost }, i) => {
          return <ProductBox key={name} icon={icon} cost={cost} />;
        })}
      </ProductWrapper>
      <Logo />
    </StyledVM>
  );
};

VendingMachine.defaultProps = {};

VendingMachine.propTypes = {};

export default VendingMachine;
