import React from 'react';

import ProductList from '@components/organisms/ProductList';
import products from '@data/products';

export default {
  title: 'Organism/ProductList',
  component: ProductList,
  args: {
    products: products,
    changeProductQuantity: () => {},
  },
};

export const Default = args => <ProductList {...args} />;
