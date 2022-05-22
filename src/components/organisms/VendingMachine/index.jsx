import React, { useContext } from 'react';
import Logo from 'components/molecules/Logo';
import ProductBox from 'components/molecules/ProductBox';
import { StyledVM, ProductWrapper } from 'components/organisms/VendingMachine/VendingMachine.style';
import { ProductContext } from 'context/Product';
import { WalletContext } from 'context/Wallet';

const VendingMachine = ({ title, ...props }) => {
  const { state: productState } = useContext(ProductContext);
  const { state: walletState } = useContext(WalletContext);

  const getProductBoxProps = ({ cost, stock, ...props }) => {
    return {
      ...props,
      cost: cost,
      isSoldOut: stock === 0,
      isActive: walletState.sumOfInsertedMoney >= cost,
    };
  };

  return (
    <StyledVM flexType="center">
      <ProductWrapper flexType="center">
        {productState?.productData.map((value, i) => (
          <ProductBox key={value.id} {...getProductBoxProps(value)} />
        ))}
      </ProductWrapper>
      <Logo />
    </StyledVM>
  );
};

export default VendingMachine;
