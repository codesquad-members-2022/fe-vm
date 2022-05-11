import DATA from './data';
import { ContentBox } from '../style';
import ProductList from './ProductList';

export default function VendingMachine() {
  return (
    <ContentBox>
      <ProductList products={DATA} />
    </ContentBox>
  );
}
