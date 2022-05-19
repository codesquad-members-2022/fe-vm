import ProductList from '@components/organisms/ProductList';
import VendingMachineInfo from '@components/organisms/VendingMachineInfo';
import { productsApi } from '@lib/api';
import useAsync from '@lib/hooks/useAsync';
import * as S from '@pages/VendingMachine/VendingMachine.style';

const VendingMachine = () => {
  const [state, refetch] = useAsync(productsApi.getAllProducts);

  // TODO: loading spinner, error 처리
  const { data: products } = state;

  const changeProductQuantity = id => () => {
    const product = products.find(product => product.id === id);
    productsApi
      .reduceProductQuantity({ id, data: { quantity: product.quantity - 1 } })
      .then(() => refetch());
  };

  return (
    <S.Container>
      {products && (
        <ProductList products={products} changeProductQuantity={changeProductQuantity} />
      )}
      <VendingMachineInfo />
    </S.Container>
  );
};

export default VendingMachine;
