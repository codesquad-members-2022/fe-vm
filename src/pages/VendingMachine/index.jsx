import ProductList from '@components/organisms/ProductList';
import VendingMachineInfo from '@components/organisms/VendingMachineInfo';
import * as S from '@pages/VendingMachine/VendingMachine.style';

const VendingMachine = () => {
  return (
    <S.Container>
      <ProductList />
      <VendingMachineInfo />
    </S.Container>
  );
};

export default VendingMachine;
