import styled from 'styled-components';
import { useContext } from 'react';
import { ProductsContext } from '../../../index';

const PRODUCT_TABLE_HEADER = {
  CODE: '상품코드',
  PRODUCT: '상품명',
  PRICE: '가격',
  STOCK: '재고',
};

function Stock() {
  const { products } = useContext(ProductsContext);

  return (
    <Table>
      <thead>
        <tr>
          <th>{PRODUCT_TABLE_HEADER.CODE}</th>
          <th>{PRODUCT_TABLE_HEADER.PRODUCT}</th>
          <th>{PRODUCT_TABLE_HEADER.PRICE}</th>
          <th>{PRODUCT_TABLE_HEADER.STOCK}</th>
        </tr>
      </thead>
      <tbody>
        {products.map(({ code, product, price, stock }) => {
          return (
            <tr key={code}>
              <td>{code}</td>
              <td>{product}</td>
              <td>{price}</td>
              <td>
                <input type="number" value={stock} />
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

const Table = styled.table`
  margin: 20px auto 0;
  width: 460px;
`;

export default Stock;