import React, { useContext } from 'react';
import Logo from 'components/molecules/Logo';
import ProductBox from 'components/molecules/ProductBox';
import { StyledVM, ProductWrapper } from 'components/organisms/VendingMachine/VendingMachine.style';
import { ProductContext } from 'context/Product';

const VendingMachine = ({ title, ...props }) => {
  const { state } = useContext(ProductContext);

  return (
    <StyledVM flexType="center">
      <ProductWrapper flexType="center">
        {state?.productData.map(({ name, icon, cost, stock }, i) => (
          <ProductBox key={name} icon={icon} cost={cost} isSoldOut={stock === 0} />
        ))}
      </ProductWrapper>
      <Logo />
    </StyledVM>
  );
};

export default VendingMachine;
