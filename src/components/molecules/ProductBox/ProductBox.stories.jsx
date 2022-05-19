import React from 'react';

import ProductBox from '@components/molecules/ProductBox';
import products from '@data/products';

export default {
  title: 'Molecule/ProductBox',
  component: ProductBox,
  args: {
    emoji: products[0].emoji,
    name: products[0].name,
    price: products[0].price,
    quantity: products[0].quantity,
    clickHandler: () => {},
  },
  argTypes: {
    emoji: {
      control: {
        type: 'text',
      },
    },
    name: {
      control: {
        type: 'text',
      },
    },
    price: {
      control: {
        type: 'number',
      },
    },
    quantity: {
      control: {
        type: 'number',
      },
    },
  },
};

export const Default = args => <ProductBox {...args} />;
