import ProductList from '@components/organisms/ProductList';
import * as S from '@pages/VendingMachine/VendingMachine.style';

const VendingMachine = () => {
  return (
    <S.Container>
      <ProductList />
    </S.Container>
  );
};

export default VendingMachine;
