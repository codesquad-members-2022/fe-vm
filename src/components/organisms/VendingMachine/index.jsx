import React from 'react';
import Logo from 'components/molecules/Logo';
import ProductBox from 'components/molecules/ProductBox';
import mockData from 'components/organisms/VendingMachine/ProductMockData';
import { StyledVM, ProductWrapper } from 'components/organisms/VendingMachine/VendingMachine.style';

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

export default VendingMachine;
