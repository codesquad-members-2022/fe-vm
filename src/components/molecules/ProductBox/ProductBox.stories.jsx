import React from 'react';

import ProductBox from '@components/molecules/ProductBox';
import products from '@data/products';

export default {
  title: 'Molecule/ProductBox',
  component: ProductBox,
  args: {
    product: products[0],
    insertedMoney: 0,
    buyProduct: () => {},
  },
};

export const Default = args => <ProductBox {...args} />;
