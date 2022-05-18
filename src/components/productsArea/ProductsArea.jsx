import React, { useContext } from 'react';
import { Container } from 'components/productsArea/ProductsArea.style';
import { ProductsContext } from 'Context/ProductsProvider';
import { FinalPayContext } from 'Context/FinalPayProvider';
import Product from 'components/productsArea/Product';

export default function ProductsArea() {
  const productsState = useContext(ProductsContext);
  const finalPay = useContext(FinalPayContext);

  const canBuyProduct = price => (finalPay ? price <= finalPay : true);

  return (
    <Container>
      {productsState.map(({ id, detail, price, quantity }) => (
        <Product
          key={id}
          detail={detail}
          price={price}
          quantity={quantity}
          disabled={!canBuyProduct(price) || quantity <= 0}
        />
      ))}
    </Container>
  );
}
