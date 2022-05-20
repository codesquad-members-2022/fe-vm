import { useContext } from 'react';
import { ProductContext } from 'context/ProductContext';
import Product from 'components/atoms/Product/Product';
import StyledProductSection from './ProdcutSection.style';

function ProductSection() {
  const { productList, setProductList } = useContext(ProductContext);
  return (
    <StyledProductSection>
      {productList.map(product => {
        return (
          <Product
            key={product.id}
            product={product}
            productList={productList}
            setProductList={setProductList}
          />
        );
      })}
    </StyledProductSection>
  );
}
export default ProductSection;
