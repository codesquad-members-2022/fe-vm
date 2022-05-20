import PannelSection from 'components/organisms/PannelSection/PannelSecction';
import ProductSection from 'components/molecules/ProductSection/ProductSection';
import StyledVendingMachine from './VendingMachine.style';

function VendingMachine() {
  return (
    <StyledVendingMachine>
      <ProductSection />
      <PannelSection />
    </StyledVendingMachine>
  );
}

export default VendingMachine;
