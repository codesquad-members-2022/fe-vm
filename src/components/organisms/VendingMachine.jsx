import React from 'react';
import PropTypes from 'prop-types';
import { StyledVM, ProductWrapper } from './VendingMachine.style';
import ProductBox from 'components/molecules/ProductBox/ProductBox';
import Logo from 'components/molecules/Logo/Logo';
import mockData from 'components/organisms/ProductMockData';

const VendingMachine = ({ title, ...props }) => {
  return (
    <StyledVM flexType={'center'}>
      <ProductWrapper flexType={'center'}>
        {mockData.map((v, i) => {
          return <ProductBox key={i} icon={v.icon} cost={v.cost} />;
        })}
      </ProductWrapper>
      <Logo />
    </StyledVM>
  );
};

VendingMachine.defaultProps = {};

VendingMachine.propTypes = {};

export default VendingMachine;
